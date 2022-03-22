
function creatPromise(val, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val)
    }, time)
  })
}
(async function () {
  // const res1 = await creatPromise(100, 1000)
  // console.log('res1 -> ', res1)
  // const res2 = await creatPromise(200, 2000)
  // console.log('res2 -> ', res2)
  // const res3 = await creatPromise(300, 5000)
  // console.log('res3 -> ', res3)
  // console.log('p1 -> ', await p1)
  
  
  const arr = [10,20,30]
  for (const num of arr) {
    const res = await creatPromise(num, num*100)
    console.log('res -> ', res)
  }
})()
