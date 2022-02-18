/*
*
* show违反开放-封闭原则
* show方法逻辑太多太复杂
* 颜色状态切换不明显
* 过多的 if/else 让代码不可维护
*
* */

class Battery {
  constructor () {
    this.amount = 'high'
  }
  
  show () {
    if (this.amount === 'high') {
      console.log('绿色')
      this.amount = 'middle'
    } else if (this.amount === 'middle') {
      console.log('黄色')
      this.amount = 'low'
    } else {
      console.log('红色')
    }
  }
}

let battery = new Battery()
battery.show()
battery.show()
battery.show()

