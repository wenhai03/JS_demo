Function.prototype.a = () => {
  console.log(1)
}
Object.prototype.b = () => {
  console.log(2)
}

function A () {
}

const a = new A()
// a.a() // 报错  a.__proto__.__proto__找到Object.prototype但这上面也没有a对应的属性值，没找到即undefined()
// console.log('AA -> ', A.__proto__ === Function.prototype)

// a.b() // 2
// A.a() // 1 // A当作对象，对象就有 __proto__ 属性，函数是特殊情况，去找的时候找到Function.prototype
