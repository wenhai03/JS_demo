###
1.原型链继承
优点：共享父类构造函数的方法
缺点：1)子类实例共享了父类构造函数的引用属性  2)不能向父类构造函数传参

```
function Parent(name){
    this.name = name || '父亲'
    this.arr = [1]
}
Parent.prototype.say = function(){
    console.log('hello')
}

function Child(like){
    this.like = like
}

Child.prototype = new Parent() // 核心，但此时Child.prototype.constructor === Parent
Child.prototype.constructor = Child // 修正constructor指向

var boy1=new Child('小明')
var boy2=new Child()

boy1.name = 'aaa'
boy2.name = 'bbb'
// 注意：修改boy1的name属性，是不会影响到boy2.name，因为设置boy1.name相当于在子类实例新增了name属性
console.log(boy1)
console.log(boy2)
```  

2.借用构造函数
优点：1)可向父类传递参数 2)不共享父类构造函数的引用属性
缺点：1)不能继承父类原型上的方法 2)方法不能复用

```
function Parent(name){
    this.name = name || '父亲'
    this.arr = [1]
    this.say = function(){
        console.log('hello')
    }
}

function Child(name, like){
    Parent.call(this, name)
    this.like = like
}

var boy1=new Child('小明', 'apple')
var boy2=new Child('小红', 'orange')

// 优点1：可向父类构造函数传参
console.log(boy1.name, boy2.name)
// 优点2：不共享父类构造函数的引用属性
boy2.arr.push(222)

console.log(boy1)
console.log(boy2)

// 方法不能复用
console.log(boy1.say === boy2.say)
// 不能继承父类原型上的方法
Parent.prototype.walk = function(){
    console.log('我会走路')
}
console.log(boy1.walk)
```
3.组合继承 (结合1、2)
优点：1)可以向父类构造函数传递参数 2)可复用父类原型上的方法 3)不共享父类的引用属性
缺点：调用2次父类的构造方法，会存在一分多余的父类实例属性

```
function Parent(name){
    this.name = name || '父亲'
    this.arr = [1]
}

Parent.prototype.say = function(){
    console.log('hello')
}

function Child(name, like){
    Parent.call(this, name, like)
    this.like = like
}

Child.prototype = new Parent()
Child.prototype.construct = Child

var boy1=new Child('小明', 'apple')
var boy2=new Child('小红', 'orange')

boy2.arr.push(222)

console.log(boy1.arr)
console.log(boy2.arr)

console.log(boy1.say===boy2.say)


```






























