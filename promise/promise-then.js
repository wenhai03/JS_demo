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
      reject(e)
    }
  }
  
  // then
  then(resolveFn, rejectFn) {
    // then链: 返回一个新的Promise实例
    // 1.resolvedArr/rejectedArr不直接存放resolvedFn/rejectFn，因为要监听这两个方法的返回结果是否报错
    // (因为只有这样才能控制新实例中到底执行resolve/reject) => 先放放匿名函数，在匿名函数中把传递的resolvedFn/rejectedFn执行
    // 2.捕获方法执行是否报错
    // 3.方法返回的如果是新的Promise实例，新实例成功或者失败的状态也是我们执行resolve和reject的标准
    return new MyPromise((resolve, reject) => {
       this.resolvedArr.push(() => {
         try {
           const x = resolveFn(this.value)
           x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
         } catch (e) {
           reject(e)
         }
       })
  
      this.rejectedArr.push(() => {
        try {
          const x = rejectFn(this.value)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}

module.exports = MyPromise
