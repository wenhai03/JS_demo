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
  },
  0)
async1()

new promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
})
console.log('script end')

// script start   async1 start   async2   promise1   script end   async1 end    promise2   setTimeout

const obj = {
  "pageNum": "1",
  "pageSize": "10",
  "keyword": "数据表",
  "owners": "2304000029"
}
// 创建 URLSearchParams 对象
const params = new URLSearchParams();
for (const key in obj) {
  params.append(key, obj[key]);
}

