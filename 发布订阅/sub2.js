(function (){
  const hasOwn = Object.prototype.hasOwnProperty
  
  class EventEmitter {
    $pond = {}
    
    $emit(type, ...params) {
      let $pond = this.$pond, arr = $pond[type]
      
      for(let i =0; i< arr.length; i++) {
        let itemFunc = arr[i]
        if( typeof itemFunc !== 'function'){
          arr.splice(i, 1)
          i--
          continue
        }
        itemFunc(...params)
      }
      
    }
    
    $on(type, func) {
      console.log('on on -> ')
      // 绑定前先看事件池当中有没有这个自定义事件，存在添加到末尾但要去重处理
      // 不存在创建一个自定义事件，属性值的是一个空数组，再把方法加入到数组中
      let $pond = this.$pond, arr = null
      !hasOwn.call($pond, type) ? $pond[type] = [] : null
      arr = $pond[type]
      !arr.includes(func) ? arr.push(func) : null
    }
    
    $off(type, func) {
      let $pond = this.$pond, arr = $pond[type]
      
      for(let i =0; i< arr.length; i++) {
        if(arr[i] === func) {
          arr[i] = null
          break
        }
      }
    }
  }
  
  window.subscribe = function () {
    return new EventEmitter
  }
  
})()
