let fs = require('fs')

function read(url){
  return new Promise((resolve, reject) => {
     fs.readFile(url, 'utf-8', function (err, data) {
       if (err) {
         reject(err)
       }
       resolve(data)
     })
  })
}


// then 的使用方式 普通值意味着不是promise
// 1.then中的回调有两个方法 成功或者失败，他们的返回结果会传递给外层的下一个then中
// 2.可以在成功和失败中抛出异常，会走到下一次的then的失败中
// 3.返回的是一个promise，那么会用这个promise的状态来作为结果，会用promise的结果向下传递
// 4.错误处理 是默认先找离自己最近的错误处理，找不到向下查找，找到后就执行

read('./name.txt').then(data => {
  return read(data)
}).then(data => {
  console.log('data -> ', data)
}).then(null, err => { // catch就是没有成功的then
  console.log('err -> ', err)
})
