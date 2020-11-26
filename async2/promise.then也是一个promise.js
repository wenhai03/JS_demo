let p1 = new Promise((resolve, reject) => {
  resolve('111')
})

let p2 = p1
  .then(value => console.log(value), reason => console.log(reason))
  .then(a => console.log('第二个then的成功方法'), b => console.log('第二个then的失败方法'))

setTimeout(()=>{
  console.log(p1, '00000')
  console.log(p2, '0000000000')
})
