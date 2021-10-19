(function () {
  const hasOwn = Object.prototype.hasOwnProperty
  
  class EventEmitter {
    $pond = {}
    
    $on (type, func) {
      let $pond = this.$pond, arr = null
      !hasOwn.call($pond, type) ? $pond[type] = [] : null
      arr = $pond[type]
      !arr.includes(func) ? arr.push(func) : null
    }
    
    $emit (type, ...params) {
      let $pond = this.$pond, arr = $pond[type]
      for (let i = 0; i < arr.length; i++) {
        const itemFunc = arr[i]
        if (typeof itemFunc !== 'function') {
          arr.splice(i, 1)
          i--
          continue
        }
        itemFunc(...params)
      }
    }
    
    $off (type, func) {
      let $pond = this.$pond, arr = $pond[type]
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === func) {
          arr[i] = null
          break
        }
      }
    }
  }
  
  window.subscribe = function (){
    return new EventEmitter()
  }
})()
