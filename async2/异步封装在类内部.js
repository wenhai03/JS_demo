// class User {
//   async get(){
//     // let user = await ajax('xxxxxxxxx')
//     let user = await Promise.resolve({name: '小明2'})
//
//     user.name += '嘿嘿'
//     console.log('user', user)
//     return user
//   }
// }
//
//
// let r =  new User().get('小明').then(res => {
//    console.log('res -> ', res)
// })

/*setTimeout(() => {
  r.then(res => {
     console.log('res -> ', res) 
  })
})*/


// 封装在对象中
let obj = {
  async getName(){
    let user = await Promise.resolve({name: '小明'})
    return user
  }
  /*getName: function () {
    return {name: '小明'}
  },
  getName(){
    return {name: '小明111'}
  }*/
}

let r = obj.getName().then(res => {
  console.log('res -> ', res)
})

setTimeout(() => {
  console.log('r -> ', r)
  
})

