let MyPromise = require('./promise-then')

let p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(100)
    // reject(200)
  }, 1000)
})


const p2 = p1.then(result => {
  console.log('成功: ', +result)
  // return 1
  // 测试 返回值是promise
  return new MyPromise((resolve, reject) => {
    // resolve(10)
    reject(20)
  })
}, reason => {
  console.log('失败: ', reason)
  return 2
})

p2.then(result => {
  console.log('P2', result)
}, reason => {
  console.log('P2: ', reason)
})

console.log('Ok ')
