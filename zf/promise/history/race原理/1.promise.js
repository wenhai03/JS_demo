let Promise = require('./promise.js')

// race赛跑 Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，
// 不管结果本身是成功状态还是失败状态

Promise.race = function (values) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < values.length; i++) {
      let value = values[i]
      if (value && typeof value.then === 'function') {
        value.then((v) => {
          resolve(v)
        }, reject)
      } else {
        resolve(value)
      }
    }
  })
}

let p5 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "five")
})
let p6 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 50, 500)
})
let p7 = new Promise(function (resolve, reject) {
  setTimeout(reject, 100, "7")
})
Promise.race([p5, p6, p7]).then(r => {
  console.log('r -> ', r)
}, err => {
  console.log('race捕获到错误', err)
})

