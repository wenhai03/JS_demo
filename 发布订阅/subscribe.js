
(function () {
  const hasOwn = Object.prototype.hasOwnProperty
  
  class Sub {
    $pond = {}
    
    // 向事件池追加方法
    $on (type, func) {
      // 每一次增加的时候，首选验证是否存在这个自定义事件，存在则把方法加入到指定事件类型的容器末尾
      // 但是需要做去重处理，不存在则创建一个自定义事件，属性值是空数组，再把方法加入到数组中
      let $pond = this.$pond,
        arr = null
      !hasOwn.call($pond, type) ? $pond[type] = [] : null
      arr = $pond[type]
      !arr.includes(func) ? arr.push(func) : null
    }
    // 通知事件池的方法执行
    $emit (type, ...params) {
      let $pond = this.$pond,
        arr = $pond[type]
  
      if (!arr) return
      for (let i = 0; i < arr.length; i++){
        let itemFunc = arr[i]
        if (typeof itemFunc !== 'function') {
          // 此时把非函数的项都移除掉
          arr.splice(i, 1)
          i--
          continue
        }
        itemFunc(...params)
      }
    }
    // 从事件池中移除方法
    $off (type, func) {
      let $pond = this.$pond,
        arr = $pond[type]
      for (let i = 0; i < arr.length; i++) {
        if ( arr[i] === func) {
          // splice删除改变原来的数据，原始数组中移除这些项，移除项后面的每一项都会向前改变索引
          // 为了防止数据结构塌陷问题，我们在移除时候应该不去改变数组的结构，而是把当前项赋值为null
          // arr.splice(i, 1)
          arr[i] = null
          break
        }
      }
    }
  }
  // 暴露给全局的用的API
  window.subscribe = function () {
    return new Sub
  }
})()


