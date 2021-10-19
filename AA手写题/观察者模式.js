class Subject { // 被观察者
  constructor (name) {
    this.name = name
    this.state = '开心'
    this.observers = []
  }
  
  attach (o) { // 需要将注册者放到自己的身上
    this.observers.push(o)
  }
  
  
  setState(state) { // 更新被观察者的状态
    this.state = state
    this.observers.forEach(o => {
      o.update(this)
    })
  }
}

class Observer { // 观察者
  constructor (name) {
    this.name = name
  }
  update(s) { // 等会被观察者的状态发生改变会执行这个函数
    console.log(`${this.name}:${s.name}的当前状态为:${s.state}`)
  }
}

const baby = new Subject('孩子')
const father = new Observer('爸爸')
const mother = new Observer('妈妈')
baby.attach(father)
baby.attach(mother)

baby.setState('不开心')


