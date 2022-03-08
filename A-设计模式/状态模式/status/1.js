class Battery {
  constructor () {
    this.amount = 'high' // 电量状态
  }
  
  show () {
    if (this.amount === 'high') {
      console.log('显示绿色')
      this.amount = 'middle'
    } else if (this.amount === 'middle') {
      console.log('显示橙色')
      this.amount = 'low'
    } else if (this.amount === 'low') {
      console.log('显示红色')
      this.amount = 'low'
    }
  }
}

const b = new Battery()
b.show()
b.show()
b.show()
