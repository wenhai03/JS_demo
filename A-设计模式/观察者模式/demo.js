/*
* 被观察者 供维护观察者一系列方法
* 观察者把自己注入到被观察者
* 观察者提供更新接口
* 被观察者状态发生改变，通知观察者更新方法
*
* */

class Star {
  constructor (name) {
    this.name = name
    this.state = ''
    this.observers = []
  }
  getState(){
    return this.state
  }
  setState(state){
    this.state = state
    this.notifyAllObservers()
  }
  attach(observer){
    this.observers.push(observer)
  }
  notifyAllObservers() {
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
    console.log(`${this.subject.name} ${this.subject.getState()}  ${this.name}`)
  }
}

const s = new Star('刘亦菲')
const f1 = new Fan('小明', s)
const f2 = new Fan('小红', s)

s.setState('结婚')
