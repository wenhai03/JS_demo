
(function () {
  Function.prototype._call = function (context, ...params) {
    context = context == null ? window : context
    const type = typeof context
    if (!/^(object|function)$/.test(type)) {
      context = (/^(symbol|bigint)$/.test(type)) ? Object(context) : new context.constructor(context)
    }
    
    let attr = Symbol('ATTR'), r
    context[attr] = this
  
    r = context[attr](...params)
    delete context[attr]
    
    return r
  }
})()

let obj = {
  name: 'zhufeng'
}

function func(x, y) {
  this.total = x + y
  return this
}

let res = func._call(obj, 100, 200)
console.log('res -> ', res)
