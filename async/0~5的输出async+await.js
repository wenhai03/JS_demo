const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

(async () => {
  for (var i = 0; i < 5; i++) {
    await sleep(1000)
    console.log('当前的i值------', i)
  }
  await sleep(1000)
  console.log('最后的i值', i)
})()