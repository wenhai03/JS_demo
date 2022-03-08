/*
* 同一个promise可以then多次，发布订阅模式
* 调用then时，如果当前状态是等待，我需要将成功和失败的回调分别进行存放 订阅模式
* 调用resolve时 将订阅的函数执行 发布的过程
* */

let Promise = require('./promise.js')

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok')
  })
})

let promise2 = p.then(val => {
   console.log('success -> ', val)
}, (reason) => {
  console.log('fail -> ', reason)
})




