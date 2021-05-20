
(function () {
  function change(context, ...params) {
    context = context == null ? window : context
    
    let type = typeof context
    if (!/^(object|function)$/.test(type)) {
      context = /^(symbol|bigint)$/.test(type) ? Object(context) : new context.constructor(context)
    }
    
    let attr = Symbol('ATTR'),
      result
    context[attr] = this
    result = context[attr](...params)
    delete context[attr]
    return result
  }
  
  Function.prototype.change = change
})()

let obj = {
  name: 'zhufeng'
}

function func(x, y) {
  this.total = x + y
  return this
}

let res = func.change(obj, 100, 200)

console.log('res -> ', res)
// res => {name: 'zhufeng', total: 300}
