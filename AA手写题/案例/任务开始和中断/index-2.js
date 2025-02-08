class TaskScheduler {
  constructor(tasks) {
    this.tasks = tasks;
    this.currentTaskIndex = 0;
    this.isPaused = false;
    this.results = new Array(tasks.length).fill(null);
  }
  
  start() {
    const executeNextTask = () => {
      if (this.currentTaskIndex < this.tasks.length && !this.isPaused) {
        const task = this.tasks[this.currentTaskIndex];
        const result = task(); // Execute task
        this.results[this.currentTaskIndex] = result;
        this.currentTaskIndex++;
        setTimeout(executeNextTask, 0); // Execute next task asynchronously
      }
    };
    
    executeNextTask();
  }
  
  pause() {
    this.isPaused = true;
  }
}

// Example usage:
const tasks = [
  () => {
    console.log('Task 1 started');
    // Do some task
    console.log('Task 1 completed');
    return 'Result of Task 1';
  },
  () => {
    console.log('Task 2 started');
    // Do some task
    console.log('Task 2 completed');
    return 'Result of Task 2';
  },
  () => {
    console.log('Task 3 started');
    // Do some task
    console.log('Task 3 completed');
    return 'Result of Task 3';
  }
];

const scheduler = new TaskScheduler(tasks);
scheduler.start(); // Start executing tasks
// Pause execution between tasks if needed
scheduler.pause(); // Pause execution
// Resume execution if needed: scheduler.start();
