/*
* 两种模式都存在订阅者和发布者(观察者可认为是订阅者、被观察者可认为是发布者)
* 但是观察者模式是由被观察者调度的，而发布/订阅模式是统一由调度中心调的
* 所以观察者模式的订阅者与发布者之间是存在依赖的，而发布/订阅模式则不会。
*
* */

// 中介
class Agency {
  constructor () {
    this._topics = {}
  }
  subscribe (topic, listener) {
    let listeners = this._topics[topic]
    if (listeners) {
      listeners.push(listener)
    } else {
      this._topics[topic] = [listener]
    }
  }
  publish (topic) {
    const listeners = this._topics[topic]
    const args = Array.from(arguments).slice(1)
    listeners.forEach(listener => listener(...args))
  }
}

// 房东
class Landlord {
  constructor (name) {
    this.name = name
  }
  lend (agent, area, money) {
    agent.publish('house', area, money)
  }
}

// 房客 租客
class Tenant {
  constructor (name) {
    this.name = name
  }
  rent (agent) {
    agent.subscribe('house', (area, money) => {
      console.log(`有新房源了, ${area}平米, ${money}元`)
    })
  }
}
const agent = new Agency() // new一个中介

const t1 = new Tenant('房客1')
const t2 = new Tenant(`房客2`)

const l1 = new Landlord('房东1')

t1.rent(agent) // 租客订阅
t2.rent(agent) // 租客订阅
l1.lend(agent, 30, 2000) // 房东发布
