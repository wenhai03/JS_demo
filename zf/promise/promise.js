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
    this.onResolvedCallback = []
    this.onRejectedCallback = []
    
    const resolve = (value) => {
      if (this.status === ENUM.PENDING) {
        this.value = value
        this.status = ENUM.FULFILLED
        
        this.onResolvedCallback.forEach(fn => fn())
      }
    }
    const reject = (reason) => {
      if (this.status === ENUM.PENDING) {
        this.reason = reason
        this.status = ENUM.REJECTED
  
        this.onRejectedCallback.forEach(fn => fn())
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
      this.onResolvedCallback.push(() => {
        onFulfilled(this.value)
      })
      this.onRejectedCallback.push(() => {
        onRejected(this.value)
      })
    }
  }
}

// class Promise {
//   constructor (executor) {
//     this.status = ENUM.PENDING
//     this.value = undefined
//     this.reason = undefined
//
//     const resolve = (value) => {
//        if (this.status === ENUM.FULFILLED) {
//          this.value = value
//          this.status = ENUM.FULFILLED
//        }
//     }
//
//     const reject = (reason) => {
//       if (this.status === ENUM.REJECTED) {
//         this.reason = reason
//         this.status = ENUM.REJECTED
//       }
//     }
//     try {
//       executor(resolve, reject)
//     } catch (e) {
//       reject(e)
//     }
//   }
//
//   then(onFulfilled, onRejected) {
//     if (this.status === ENUM.FULFILLED) {
//       onFulfilled(this.value)
//     }
//     if (this.status === ENUM.REJECTED) {
//       onRejected(this.reason)
//     }
//   }
// }

module.exports = Promise
