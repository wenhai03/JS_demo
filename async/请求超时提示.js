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
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject('网络不佳')
      // resolve('网络可以')
    }, 3000)
  })
}

Promise.race([
  request(),
  timeout()
]).then(res => {
  console.log(res)
}).catch(err => {
  //网络不佳
  console.log('err', err)
})

