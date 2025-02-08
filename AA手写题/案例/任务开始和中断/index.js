/*
*
* 依次顺序执行一系列任务
* 所有任务全部完成后可以得到每个任务的执行结果
* 需要返回两个方法，start用于启动任务，pause用于暂停任务
* 每个任务具有原子性，即不可中断，只能在两个任务之间中断
* */

class TaskQueue {
  constructor() {
    this.tasks = [];
    this.currentTaskIndex = 0;
    this.isPaused = false;
  }
  
  addTask(task) {
    this.tasks.push(task);
  }
  
  async start() {
    debugger
    while (this.currentTaskIndex < this.tasks.length) {
      if (!this.isPaused) {
        const task = this.tasks[this.currentTaskIndex];
        try {
          const result = await task();
          console.log(`任务${this.currentTaskIndex + 1}执行结果：`, result);
          this.currentTaskIndex++;
        } catch (error) {
          console.error(`任务${this.currentTaskIndex + 1}执行出错：`, error);
          break;
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }
  }
  
  pause() {
    this.isPaused = true;
  }
  
  resume() {
    this.isPaused = false;
  }
}

// 使用示例
const taskQueue = new TaskQueue();

taskQueue.addTask(async () => {
  return "任务1完成11";
});

taskQueue.addTask(async () => {
  return "任务2完成";
});

taskQueue.addTask(async () => {
  return "任务3完成";
});

taskQueue.start();

/*setTimeout(() => {
  taskQueue.pause();
}, 1000);

setTimeout(() => {
  taskQueue.resume();
}, 3000);*/
