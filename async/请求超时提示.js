//请求
function request () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('请求成功')
    }, 4000)
  })
}


//请求超时提醒
function timeout () {
  let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject('网络不佳')
      // resolve('网络可以')
    }, 3000)
  })
  return p
}

Promise.race([
  request(),
  timeout()
])
  .then(res => {
    console.log(res)
  }).catch(err => {
  console.log('err', err)//网络不佳
})

