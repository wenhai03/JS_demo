let Promise = require('./promise.js')

// finally传入的函数无论成功还是失败都会执行
// 如果返回的是成功的promise 会采用上一次的结果
// 返回的是失败的promise 会用这个失败的结果 传入到catch中


Promise.resolve('123').finally(() => {
  console.log('finally执行00')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('成功')
      // reject('reject1111')
    }, 3000)
  })
}).then(res => {
  console.log('res -> ', res)
}, err => {
  console.log('err -> ', err)
})

// 别人家的finally
// new Promise((resolve, reject) => {
//   reject('reject finally')
//   resolve('finally')
// }).finally(() => {
//   console.log('都会执行')
// }).then(res => {
//   console.log('接收 res -> ', res)
// }, err => {
//   console.log('err -> ', err)
// })



