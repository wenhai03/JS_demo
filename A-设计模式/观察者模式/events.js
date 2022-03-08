class EventEmitter {
  constructor () {
    this._events = {}
  }
  on(type, listener) {
    const listeners = this._events[type]
    if (listeners) { // 如果有当前事件名，就往数组里面添加
      listeners.push(listener)
    } else { // 没有就添加到数组第一个
      this._events[type] = [listener]
    }
  }
  emit(type) {
    const listeners = this._events[type]
    const args = Array.from(arguments).slice(1)
    // console.log('type', type)
    // console.log('args', args)
    listeners.forEach(listener => listener(...args))
  }
}

const subject = new EventEmitter()
subject.on('click', function (name){
  console.log('1 -> ', name)
})
subject.on('click', function (name){
  console.log('2 -> ', name)
})

subject.emit('click', 'zfpx')
