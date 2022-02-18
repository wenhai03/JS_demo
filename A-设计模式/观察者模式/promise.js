/*
* then方法执行时机在resolve方法执行
*
* resolve方法在Promise内部定义，用户
*
*
* */

class Promise {
  constructor (fn) {
    this.callbacks = []
    const resolve = () => {
      this.callbacks.forEach(callback => callback())
    }
    fn(resolve)
  }
  then(callback){
    this.callbacks.push(callback)
  }
}

const promise = new Promise(function (resolve) {
  setTimeout(() => {
    resolve(100)
  }, 2000)
})

promise.then(()=> console.log(1))
promise.then(()=> console.log(2))

