//
// 函数传参
function sum (...arg) {
  const r = arg.reduce((pre, cur) => pre + cur, 0)
  console.log('r -> ', r)
}

setTimeout(sum, 1000, 1, 2, 3)

// 第三个参数作为函数
// let i = 0
// setTimeout(() => {
//   console.log('我是第一个setTimeout', i)
// }, 0, setTimeout(() => {
//   console.log('我是第二个setTimeout')
//   i++
// }, 1000))

// 最后依次输出为 第一次0 第二次1 可以看到第三个参数还可以是先执行，然后再执行函数
