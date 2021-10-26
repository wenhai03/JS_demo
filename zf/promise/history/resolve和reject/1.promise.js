// Promise.resolve() 快创建一个成功的promise
// Promise.reject() 快创建一个失败的reject


let Promise = require('./promise.js')

// Promise.reject('reason000').then(res => {
//   console.log('res -> ', res)
// }, err => {
//   console.log('err -> ', err)
// })

// Promise.resolve(new Promise((resolve, reject) => {
//   let a = 1
//   setTimeout(() => {
//      resolve(a)
//    })
// })).then(res => {
//   console.log('res 1-> ', res)
// })


// Promise.resolve('普通值').then(res => {
//   console.log('res 12300-> ', res)
// })

