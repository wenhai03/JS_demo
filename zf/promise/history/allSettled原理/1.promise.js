let Promise = require('./promise.js')
// 返回值可以再then说明返回是promise实例，因为实例上有then方法
// allSettled返回的res中都有个status状态来判断是包含有成功和失败

Promise.allSettled = function (values) {
  return new Promise((resolve, reject) => {
    let resArr = [], orderIndex = 0
    const processResByIndex = (value, i) => {
      resArr[i] = value
      if (++orderIndex === values.length) resolve(resArr)
    }
    for (let i = 0; i < values.length; i++) {
      const value = values[i]
      if (value && typeof value.then === 'function') {
        value.then(value => {
          processResByIndex({
            status: 'fulfilled',
            value
          }, i)
        }, err => {
          processResByIndex({
            status: 'rejected',
            reason: err
          }, i)
        })
      } else {
        processResByIndex({
          status: 'fulfilled',
          value
        }, i)
      }
    }
  })
}

Promise.allSettled([
  100,
  Promise.resolve({
    code: 200,
    data: [1, 2, 3]
  }),
  Promise.reject({
    code: 500,
    data: []
  }),
  Promise.resolve({
    code: 200,
    data: [7, 8, 9]
  })
]).then(res => {
  console.log('res 000 -> ', res)
  const data = res.filter(item => item.status === 'fulfilled')
  console.log(data)
})
