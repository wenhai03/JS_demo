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









// class Promise {
//   constructor (executor) {
//     this.status = ENUM.PENDING // 如果是等待态可以更改状态
//     this.value = undefined
//     this.reason = undefined
//     const resolve = (value) => {
//       if (this.status === ENUM.PENDING) {
//         this.value = value
//         this.status = ENUM.FULFILLED
//       }
//     }
//     const reject = (reason) => {
//       if (this.status === ENUM.PENDING) {
//         this.reason = reason
//         this.status = ENUM.REJECTED
//       }
//     }
//
//     try {
//       executor(resolve, reject)
//     } catch (e) {
//       reject(e)
//     }
//   }
//
//   then (onFulfilled, onRejected) {
//     console.log('this.status -> ', this.status)
//     if (this.status === ENUM.FULFILLED) {
//       onFulfilled(this.value)
//     }
//     if (this.status === ENUM.REJECTED) {
//       onRejected(this.reason)
//     }
//
//     // console.log('onFulfilled, onRejected -> ', onFulfilled, onRejected)
//   }
//
// }

// class Promise {
//   constructor (executor) {
//     this.status = ENUM.PENDING
//     this.value = undefined
//     this.reason = undefined
//     const resolve = (value) => {
//        if (this.status === ENUM.PENDING) {
//          this.value = value
//          this.status = ENUM.FULFILLED
//        }
//     }
//     const reject = (reason) => {
//       if (this.status === ENUM.PENDING) {
//         this.reason = reason
//         this.status = ENUM.REJECTED
//       }
//     }
//
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
