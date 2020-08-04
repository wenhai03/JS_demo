/*let p = () => {
   return new Promise((res, rej) => {
      setTimeout(() => {
         res(12345)
      }, 1000)
   })
}

async function q1() {
  let res = await p()
  console.log('res------', res)
}

q1()*/

// 等价于

let p = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(12345)
    }, 1000)
  })
}


function q1() {
  p().then(res => {
     console.log('res------', res)
  })
}

q1()