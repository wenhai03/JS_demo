let promise = require('./promise.js')

let prosmise = new promise((resolve, reject) => {
  reject('失败')
  resolve('ok')
})

prosmise.then(val => {
   console.log('success -> ', val)
}, (reason) => {
  console.log('fail -> ', reason)
})



// promise是一个类 需要new这个类型
// 1.executor执行器 默认会执行
// 2.promise默认状态是等待态 (三个状态 等待 成功 失败)
// 3.成功调用resolve，失败调用reject
// 4.返回的实例中有个then方法，then中需要提供两个参数，分别对应成功的函数和失败的函数
// 5.同时调用resolve和reject，会以第一次的调用为结果
// 6.抛出异常走失败的逻辑
// 7.成功可以传入成功的值，失败可以传入失败的原因

