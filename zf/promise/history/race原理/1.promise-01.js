let Promise = require('./promise.js')

// race赛跑 Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，
// 不管结果本身是成功状态还是失败状态
function isPromise (x) { // 校验是否是 promise
  if ((typeof x == 'object' && x !== null) || typeof x == 'function') {
    if (typeof x.then == 'function') {
      return true
    }
  }
  return false
}

Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    if (!promises.length) return
    promises.forEach(item => {
      if (isPromise(item)) {
        item.then((data) => {
          resolve(data)
        }, reject)
      } else {
        resolve(item)
      }
    })
  })
}
let p5 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "five")
})
let p6 = new Promise(function (resolve, reject) {
  setTimeout(() => {
     reject('50')
  }, 50)
})
let p7 = new Promise(function (resolve, reject) {
  setTimeout(reject, 100, "7")
})
Promise.race([p5, p6, p7]).then(data => {
  console.log('1---->', data)
}, err => {
  console.log('err', err)
})

