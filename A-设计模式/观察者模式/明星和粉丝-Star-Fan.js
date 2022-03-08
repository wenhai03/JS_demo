/*
*
*
明星(star 被观察者) 粉丝(Observer 观察者)
被观察者 供维护观察者的一系列方法
观察者提供更新接口
观察者把自己注册到被观察者里(new时候构造函数会执行)
在被观察者发生变化时候，调用观察者的更新方法
*
* */

class Star {
  constructor (name) {
    this.name = name
    this.state = '' // 当明星状态改变通知粉丝,这个时候会调用粉丝的update方法
    this.observers = [] // 明星的粉丝
    this.count = 0
  }
  
  getState () {
    return this.state
  }
  
  setState (state) {
    this.state = state
    this.notifyAllObservers()
  }
  
  attach (observer) { // 添加粉丝，在粉丝new的那一刻，构造函数就会把attach方法执行
    this.count++
    console.log('添加了一个粉丝', this.count)
    this.observers.push(observer)
  }
  
  notifyAllObservers () {
    this.observers.forEach(observer => observer.update())
  }
}

class Fan {
  constructor (name, subject) {
    this.name = name
    this.subject = subject
    this.subject.attach(this)
  }
  
  update () {
    console.log(`${this.subject.name}有新的状态-${this.subject.getState()},${this.name}正在更新`)
  }
}

const star = new Star('赵丽颖')
const fan1 = new Fan('小明', star)
const fan2 = new Fan('小强', star)

console.log('当前明星的粉丝数量', star.count)
star.setState('结婚')
