const ENUM = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
}

class Promise {
  constructor (executor) {
    this.status = ENUM.PENDING // 如果是等待态可以更改状态
    this.value = undefined
    this.reason = undefined
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []
    
    const resolve = (value) => {
      if (this.status === ENUM.PENDING) {
        this.value = value
        this.status = ENUM.FULFILLED
        
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }
    const reject = (reason) => {
      if (this.status === ENUM.PENDING) {
        this.reason = reason
        this.status = ENUM.REJECTED
  
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
    if (this.status === ENUM.FULFILLED) {
      onFulfilled(this.value)
    }
    if (this.status === ENUM.REJECTED) {
      onRejected(this.reason)
    }
    
    if (this.status === ENUM.PENDING) {
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value)
      })
  
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason)
      })
    }
  }

}

module.exports = Promise
