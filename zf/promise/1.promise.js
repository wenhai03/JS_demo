let promise = require('./promise.js')

let prosmise = new promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok')
  })
})

prosmise.then(val => {
   console.log('success -> ', val)
}, (reason) => {
  console.log('fail -> ', reason)
})

prosmise.then(val => {
  console.log('success 22 -> ', val)
}, (reason) => {
  console.log('fail 22-> ', reason)
})

// 1.同一个promise可以then多次 (发布订阅模式)
// 调用then时 当前状态如果是等待状态，我需要将成功和失败的回调 分别进行存放(订阅)
// 调用resolve时 将订阅的函数进行执行 (发布的过程)


