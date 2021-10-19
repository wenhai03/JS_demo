// promise是一个类 需要new这个类型

// executor执行器默认会立即执行

// 1executor执行器 默认会执行
// 2Promise默认是等待状态 (三个状态 等待 成功 失败)
// 3成功调用resolve，失败调用reject
// 4返回的实例上有个then方法，then中需要提供两个参数，分别是成功对应的函数和失败的对应的函数
// 5同时调用成功或者失败，会以第一次的调用结果
// 6抛出异常，走失败的逻辑
// 7成功可以传入成功的值，失败可以传入失败的原因


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











// 1.executor执行器 默认会立即执行
// 2.默认promise的状态是等待态 (三个状态 等待 成功 失败)
// 3.当调用resolve时 会变成成功态 调用reject 会变成失败态
// 4.返回的实例上有一个then方法，then中需要提供两个参数，分别是成功对应的函数和失败对应的函数
// 5.如果同时调用成功和失败 默认会采取第一次调用的结果
// 6.抛出异常就走失败逻辑
// 7.成功可以传入成功的值，失败时可以传入失败的原因
