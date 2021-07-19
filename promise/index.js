let MyPromise = require('./promiseA+')

let p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject(100)
  }, 2000)
})

p.then(result => {
   console.log('成功 -> ', result)
}, reason => {
  console.log('失败 -> ', reason)
})

console.log('ok -> ')
