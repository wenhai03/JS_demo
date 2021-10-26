let Promise = require('./promise.js')

// 1.all可以再then，说明返回值是promise实例才有then方法
// 2.所有 promise 并发执行，根据执行个数判断是否执行完毕

Promise.all = function (values) {
  return new Promise((resolve, reject) => {
    let orderIndex = 0
    let resultArr = []
    const processResByIndex = (value, i) => {
      resultArr[i] = value
      if (++orderIndex) resolve(resultArr)
    }
    for (let i = 0; i < values.length; i++) {
      let value = values[i]
      if (value && typeof value.then === 'function') {
        value.then((v) => {
           processResByIndex(v, i)
        }, reject)
      } else {
        processResByIndex(value, i)
      }
    }
    resolve()
  })
}

Promise.all([1, 2, 4, new Promise(resolve => {
  resolve('555')
})]).then(r => {
  console.log('r -> ', r)
})

