class KPromise {
  constructor (handler) {
    
    // pending resolved rejected
    this.status = 'PENDING'
    
    // 数组：队列， 先注册的，在调用resolve方法的时候，先执行  FIFO
    this.resolvedHandler = []
    this.rejectedHandler = []
    
    handler(this._resolve.bind(this), this._reject.bind(this))
    
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
    })
  }
  
  observe (callback) {
    let ob = new MutationObserver(() => {
      callback();
      ob.disconnect();
      ob = null;
    })
  
    ob.observe(document.body, {
      attributes: true
    });
    document.body.setAttribute('_kkb', Math.random())
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
    
    this.resolvedHandler.push(resolvedHandler)
    this.rejectedHandler.push(rejectedHandler)
    
    return new KPromise((resolve, reject) => {
      // resolve()
      this.resolvedHandler.push(resolve)
    })
  }
  
}
