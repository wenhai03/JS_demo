async function async1 () {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2 () {
  console.log('async2')
}

console.log('script start')
setTimeout(function () {
  console.log('setTimeout')
})
async1()
new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
})
console.log('script end')


/*var p = Promise.resolve()
;(() => {
  var implicit_promise = new Promise(resolve  => {
    var promise = new Promise(res=> res(p))
    promise.then(() => {
      console.log('after:await')
      resolve()
    })
  } )
  
  return implicit_promise
})()

p.then(() => {
  console.log('tick:a')
}).then(() => {
  console.log('tick:b')
}).then(() => {
  console.log('tick:c')
})*/
