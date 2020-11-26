class KPromise {
  constructor (handler) {
    
    // pending resolved rejected
    this.status = 'PENDING'
    
    // 数组：队列， 先注册的，在调用resolve方法的时候，先执行  FIFO
    this.resolvedHandler = []
    this.rejectedHandler = []
    this.finallyHandler = []
    
    handler(this._resolve.bind(this), this._reject.bind(this))
    
  }
  
  observe (callback) {
    let ob = new MutationObserver(() => {
      callback()
      ob.disconnect()
      ob = null
    })
    
    ob.observe(document.body, {
      attributes: true
    })
    document.body.setAttribute('_kkb', Math.random())
  }
  
  _resolve (value) {
    if (this.status !== 'PENDING') return
    this.status = 'RESOLVED'
    this.observe(() => {
      let handler
      // 因为每个独立的Promise只处理一个任务，所以注册的回调取出以后就不再需要了
      while (handler = this.resolvedHandler.shift()) {
        handler(value)
      }
      
      this._finally(value)
    })
  }
  
  _reject (value) {
    if (this.status !== 'PENDING') return
    this.status = 'REJECTED'
    this.observe(() => {
      let handler
      // 因为每个独立的Promise只处理一个任务，所以注册的回调取出以后就不再需要了
      while (handler = this.rejectedHandler.shift()) {
        handler(value)
      }
      
      this._finally(value)
    })
  }
  
  _finally (value) {
    this.observe(() => {
      let handler
      // 因为每个独立的Promise只处理一个任务，所以注册的回调取出以后就不再需要了
      while (handler = this.finallyHandler.shift()) {
        handler(value)
      }
    })
  }
  
  then (resolvedHandler, rejectedHandler) {
    /*
    * then方法并不会立即执行传入的函数
    * 而是需要等待 KPromise调用 resolve方法，确认前置任务以及执行成功了才调用
    * 为了满足这个需求，我们这里需要先把传入的resolveHandler保存到一个指定的位置，在KPromise调用resolve方法以后再去执行 - 事件注册
    *
    * */
    // resolvedHandler()
    
    // this.resolvedHandler.push(resolvedHandler)
    // this.rejectedHandler.push(rejectedHandler)
    
    /*
    *
    * [f1, f2]
    * [f]
    * function f(){
    *   f1()
    *   f2()
    * }
    *
    * */
    
    return new KPromise((resolve, reject) => {
      // resolve()
      //this.resolvedHandler.push(resolve)
      
      this.resolvedHandler.push((val) => {
        if (typeof resolvedHandler === 'function') {
          val = resolvedHandler(val)
          if (val instanceof KPromise) {
            return val.then(resolve, reject)
          }
          
          if (typeof val === 'object' && val.then) {
            return val.then()
          }
          
          resolve(val)
        }
        
      })
      
      this.rejectedHandler.push((val) => {
        
        if (typeof rejectedHandler === 'function') {
          val = rejectedHandler(val)
          if (val instanceof KPromise) {
            console.log('rejectedHandler  KPromise-> ')
            
            return val.then(resolve, reject)
          }
          
          if (typeof val === 'object' && val.then) {
            return val.then()
          }
          
        }
        reject(val)
        
      })
      
      
    })
  }
  
  
  catch (rejectedHandler) {
    return this.then(undefined, rejectedHandler)
  }
  
  finally (finallyHandler) {
    this.finallyHandler.push(finallyHandler)
  }
  
  static resolve (val) {
    return new KPromise((resolve) => {
      resolve(val)
    })
  }
  
  static all (it) {
    let len = it.length
    let values = []
    let n = 0
    
    return new KPromise((resolve, reject) => {
      for (let i = 0; i < len; i++) {
        let curPromise = it[i]
  
        curPromise.then((val) => {
          values[i] = val
          n++
          if (n === len) {
            resolve(values)
          }
        })
      }
    })
    
    
  }
  
  
}
