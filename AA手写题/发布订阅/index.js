class EventEmitter{
  constructor () {
    this.events = {}
  }
  get events() {
    return this._events
  }
  on(eventName, callback) { // 订阅
    this.events[eventName] = [...(this.events[eventName] || []), callback]
  }
  emit(eventName, ...args) { // 发布
    const callbacks = this.events[eventName] ?? []
    callbacks.forEach(cb => cb(...args))
  }
  off(eventName, callback) { // 取消订阅
    const index = this.events[eventName].indexOf(callback)
    if (index !==-1) {
      this.events[eventName].splice(index, 1)
    }
  }
  once(eventName, callback) { // 触发一次
    const one = (...args) => {
      callback(...args)
      this.off(eventName, one)
    }
    this.on(eventName, one)
  }
}

/*
* 1 四个方法 on emit off once
* 2 事件名 回调函数  (emit 触发的时候 需要传递参数)
* 3 once 里头自定义一个 one 函数传递给 on 然后执行回调函数 然后取消订阅
* */

/*

class EventEmitter{
  constructor () {
    this.events = {}
  }
  on(eventName, callback) { // 订阅
    const callbacks = this.events[eventName] || [] // 数组值
    callbacks.push(callback)
    
    this.events[eventName] = callbacks
  }
  emit(eventName, ...args) { // 发布
    const callbacks = this.events[eventName] || []
    callbacks.forEach(cb => cb(...args))
  }
  off(eventName, callback) { // 取消订阅
    const index = this.events[eventName].indexOf(callback)
    if (index !==-1) {
      this.events[eventName].splice(index, 1)
    }
  }
  once(eventName, callback) { // 触发一次
    const one = (...args) => {
      callback(...args)
      this.off(eventName, one)
    }
    this.on(eventName, one)
  }
}
*/

