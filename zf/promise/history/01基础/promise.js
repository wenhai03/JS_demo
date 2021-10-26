const ENUM = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
}

class Promise {
  constructor (executor) {
    this.status = ENUM.PENDING
    this.value = null
    this.reason = null
    
    const resolve = (value) => {
      if (this.status === ENUM.PENDING) {
        this.value = value
        this.status = ENUM.FULFILLED
      }
    
    }
    const reason = (reason) => {
      if (this.status === ENUM.PENDING) {
        this.reason = reason
        this.status = ENUM.REJECTED
      }
    }
    
    try {
      executor(resolve, reason)
    } catch (e) {
      reason(this.reason)
    }
  }
  
  then(onFulfilled, onReject) {
    if (this.status === ENUM.FULFILLED) {
      onFulfilled(this.value)
    }
  
    if (this.status === ENUM.REJECTED) {
      onReject(this.reason)
    }
  }
}

module.exports = Promise
