class CPU {
  start() {
    console.log('启动CPU')
  }
}
class Memory {
  start() {
    console.log('启动内存')
  }
}
class HardDisk {
  start() {
    console.log('启动硬盘')
  }
}
class Computer {
  constructor () {
    this.cup = new CPU()
    this.memory = new Memory()
    this.hardDisk = new HardDisk()
  }
  
  start() {
    this.cup.start()
    this.memory.start()
    this.hardDisk.start()
  }
}

const c = new Computer()
c.start()
