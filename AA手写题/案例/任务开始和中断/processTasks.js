function processTasks (...tasks) {
  let isRunning = false
  const result = []
  let i = 0
  return {
    start () {
      return new Promise(async (resolve, reject) => {
        if (isRunning) return
        
        isRunning = true
        while (i < tasks.length) {
          console.log('任务开始', i)
          result.push(await tasks[i]())
          console.log('任务结束', i)
          i++
          if (!isRunning) {
            return
          }
        }
        // 所有任务均已完成
        isRunning = false
        
        resolve(result)
      })
      
    },
    pause () {
      isRunning = false
    }
  }
}