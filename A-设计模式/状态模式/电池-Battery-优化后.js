class Battery {
  constructor (state) {
    this.amount = 'high'
    this.state = new SuccessState()
  }
  
  show () {
    this.state.show()
    if (this.amount === 'high') {
      // this.amount = 'middle'
      this.setState(new WarningState())
    } else if (this.amount === 'middle') {
      // this.amount = 'low'
      this.setState(new DangerState())
    }
  }
  
  setState (state) {
    this.state = state
  }
}

class SuccessState {
  constructor (battery) {
    this.battery = battery
  }
  show () {
    console.log(`绿色 ${battery.amount}`)
  }
}

class WarningState {
  constructor (battery) {
    this.battery = battery
  }
  
  show () {
    console.log(`黄色 ${battery.amount}`)
  }
}

class DangerState {
  constructor (battery) {
    this.battery = battery
  }
  
  show () {
    console.log(`红色 ${battery.amount}`)
  }
}

let battery = new Battery(new WarningState)
battery.show()
// battery.show()
// battery.show()
// battery.show()
