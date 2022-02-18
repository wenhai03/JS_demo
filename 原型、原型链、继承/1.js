function Animal () {
  this.type = '哺乳类'
}

Animal.prototype.type = '哺乳'
const a = new Animal()
// delete a.type

// console.log('---',a.type)
// console.log( 'ooo',a.__proto__.__proto__ === Object.prototype) // true
// console.log('ccc', Animal.prototype.constructor === Animal)
// console.log('Object __proto__', Object.prototype.__proto__) // null

// 特殊的 Function Object(可充当对象 也可以充当函数)
console.log('type', a.hasOwnProperty('type'))
console.log('fff', Function.__proto__ === Function.prototype)
console.log('bbb', Object.__proto__ === Function.prototype)
console.log('ff--bb', Object.__proto__ === Function.__proto__)
/*
* Object.__proto__ === Function.prototype  Object当成对象
*
* */
