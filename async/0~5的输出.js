// 输出 0，之后每隔 1 秒依次输出 1,2,3,4，循环结束后在大概第 5 秒的时候输出 5

const tasks = [] // 这里存放异步操作的promise

const output = (i) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('当前数值', i)
      // resolve()
    }, 1000 * i)
  })
}

// 生成全部的异步操作
for (var i = 0; i < 5; i++) {
  tasks.push(output(i))
}

// 异步操作完生成
Promise.all(tasks).then(() => {
  setTimeout(() => {
    console.log('最后的i值', i)
  }, 1000 * i)
})