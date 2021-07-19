class MyPromise {
  constructor (executor) {
    this.status = 'pending'
    this.value = undefined
    this.resolvedArr = []
    this.rejectedArr = []
    
    // 改变状态的函数
    const changeStatus = (status, result) => {
      if (this.status !== 'pending') return
      this.status = status
      this.value = result
      const arr = status === 'fulfilled' ? this.resolvedArr : this.rejectedArr
      arr.forEach(item => typeof item === 'function' ? item(result) : null)
    }
    
    const resolve = result => {
      if (this.resolvedArr.length > 0) {
        changeStatus('fulfilled', result)
        return
      }
      const delayTimer = setTimeout(() => {
        clearTimeout(delayTimer)
        changeStatus('fulfilled', result)
      }, 0)
    }
    const reject = reason => {
      if (this.rejectedArr.length > 0) {
        changeStatus('rejected', reason)
        return
      }
      const delayTimer = setTimeout(() => {
        clearTimeout(delayTimer)
        changeStatus('rejected', reason)
      }, 0)
    }
    try {
      executor(resolve, reject)
    } catch (e) {
      console.log('捕获到错误 e-> ', e)
      reject(e)
    }
  }
  
  // then
  then(resolveFn, rejectFn) {
    this.resolvedArr.push(resolveFn)
    this.rejectedArr.push(rejectFn)
  }
}

module.exports = MyPromise
