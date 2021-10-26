const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

const resolvePromise = (promise2, x, resolve, reject) => {
  if (promise2 === x) {
    return reject(new TypeError('不能同时引用 promise'))
  }
}

class Promise {
  constructor (executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []
    
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value
        this.status = FULFILLED
        
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }
    const reject = (reason) => {
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

  // 1.promise 成功和失败的回调返回值可以传递到外层的下一个then
  // 2.如果返回的是普通值(传递到下一次的成功中，不是错误不是promise就是普通值)，出错的情况(一定会走到下一次的失败)
  // 可能还是promise的情况(会采用promise的状态，决定走下一次的成功还是失败)
  // 3.错误处理，如果离自己最近的then 没有错误处理(没有写错误函数)，会向下找
  // 4.每次执行完promise.then方法后返回的都是一个'新的promise' promise一旦成功或者失败就不能修改状态
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
}

module.exports = Promise
