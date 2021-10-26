const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

const resolvePromise = (promise2, x, resolve, reject) => {
  if (promise2 === x) { // 用一个类型错误，结束掉promise
    return reject(new TypeError('不能同时引用 promise Chaining cycle detected for promise #<Promise>'))
  }
  let called = false
  // 后续的条件要严格判断 保证代码能和别的库一起使用
  if (typeof x === 'object' && x!= null || typeof x === 'function') { // 有可能是一个promise
    // 要继续判断
    try {
      let then = x.then
      if (typeof then === 'function') { // 只能认为是一个promise
        // 不要写成x.then 直接then.call就可以
        then.call(x, y => { // 根据promise的状态决定是成功还是失败
          if(called) return
          called = true
          resolvePromise(promise2, y, resolve, reject)
        }, e=> {
          if(called) return
          called = true
          reject(e)
        })
      } else { // {then: '23'}
        resolve(x)
      }
      
    } catch (e) {
      if(called) return
      called = true
      reject(e) // 取值出出错
    }
  } else {
    resolve(x)
  }
}

class Promise {
  constructor (executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []
    
    const resolve = (value) => { // 调用此方法就是成功
      if (value instanceof Promise) { // 递归解析resolve中参数，直到这个值是普通值
        return value.then(resolve, reject)
      }
      if (this.status === PENDING) {
        this.value = value
        this.status = FULFILLED
        
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }
    const reject = (reason) => {  // 调用此方法就是失败
      if (this.status === PENDING) {
        this.reason = reason
        this.status = REJECTED
        
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  
  then (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}
    
    let promise2 = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }
      
      if (this.status === PENDING) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
        
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
          
        })
      }
    })
    
    return promise2
    
  }
  
  
  static resolve(value) {
    return new Promise((resolve) => {
      resolve(value)
    })
  }
  
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }
  
  static defer(){
  
  }
}


module.exports = Promise
