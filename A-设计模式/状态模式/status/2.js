class SuccessState {
  show () {
    console.log('绿色')
  }
}

class WarningState {
  show () {
    console.log('橙色')
  }
}

class ErrorState {
  show () {
    console.log('红色')
  }
}

/*
* 状态切换不明显
* show的逻辑太复杂
* */

class Battery {
  constructor () {
    this.amount = 'high'
    this.state = new SuccessState() // 绿色状态，满电
    
  }
  
  show () {
    this.state.show() // 把显示的逻辑委托给了状态对象
    // 内部还要维护状态的变化
    if (this.amount === 'high') {
      this.amount = 'middle'
      this.state = new WarningState()
    } else if (this.amount === 'middle') {
      this.amount = 'low'
      this.state = new ErrorState()
    }
  }
}

const b = new Battery
b.show()
b.show()
b.show()





