class Person {
  constructor (name) {
    this.name = name;
    this.say1 = () => {
      console.log('我在里面', this.name)
    }
  }
  
  say2() {
    console.log('我在外面', this.name)
  }
}

const A = new Person('A')
const B = new Person('B')

console.log(A.say1 === B.say1) // false
console.log(A.say2 === B.say2) // true

/*
*
* 1.constructor内部定义的方法  实际上是在每个对象实例上创建了一个 新的函数，是各个实例对象独有的
    constructor外部定义的方法 是在Person的原型对象(Person.prototype)上创建，作用Person实例共享
* 2.constructor内部定义的方法可以被Object.keys()遍历，外部定义的方法，不能被遍历
* // const A = new Person('A')
 Object.keys(A)  // ['name', 'say1']

* */