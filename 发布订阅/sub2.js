(function () {
  // const hasOwn = Object.prototype.hasOwnProperty
  const hasOwn = Object.prototype.hasOwnProperty
  class EventEmitter {
    $pond = {}
    // 实现订阅
    $on(type, func) {
      // 添加前首先看事件池里面是否有这个自定义事件，存在则添加添加到末尾，但需要去重处理
      // 不存在则创建一个自定义事件，属性值是一个空数组，再把方法加入到数组中
      let $pond = this.$pond, arr = null
      
      !hasOwn.call($pond, type) ? $pond[type] = [] : null
      arr = $pond[type]
      !arr.includes(func) ? arr.push(func) : null
    }
    
    // 触发事件,通知事件池的方法执行
    $emit(type, ...params) {
      let $pond = this.$pond, arr = $pond[type]
      
      if (!arr) return
      for (let i = 0; i< arr.length; i++) {
        let itemFunc = arr[i]
        if (typeof itemFunc !== 'function') {
          arr.splice(i, 1)
          i--
          continue
        }
        itemFunc(...params)
      }
    }
    // 删除订阅
    $off (type, func) {
      let $pond = this.$pond, arr = $pond[type]
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === func) {
          arr[i] = null
          break
        }
      }
    }
    
    // 只执行一次订阅事件
    $once(type, func) {
      function fn() {
        func();
        this.$off(type, fn);
      }
      this.$on(type, fn);
    }
  }
  
  window.subscribe = function () {
    return new EventEmitter()
  }
})()
