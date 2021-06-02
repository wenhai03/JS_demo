
/*
* 核心原理：给context设置一个属性(属性名尽可能保持唯一性，避免我们自己设置的属性修改默认对象中的结构，例如可以基于Symbol实现，
* 也可以创建一个时间戳名字)，属性值一定是我们要执行的函数(也就是this，call中的this就是我们要操作的这个函数)，接下来基于context.xxx()
* 成员访问执行方法，就可以把函数执行，并且改变里面的this(还可以把params中的信息传递给和这个函数即可)都处理完了，别忘记context设置的这个属性
* 删除掉
*
* 如果context是基本类型值，默认是不能设置属性的，此时我们需要把这个基本类型值修改为它对应的构造函数类型值
*
* */
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
