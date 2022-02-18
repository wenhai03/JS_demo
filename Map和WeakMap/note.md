###Map 的特点
```
Map 默认情况下不包含任何键，所有键都是自己添加进去的。不同于 Object 原型链上有一些默认的键。
Map 的键可以是任意类型数据，就连函数都可以。
Map 的键值对个数可以轻易通过size属性获取，Object 需要手动计算。
Map 在频繁增删键值对的场景下性能要比 Object 好。

```
####Map 转为数组
```
let map = new Map()
let arr = [...map]

```

####  WeakMap 只能将对象作为键名
```
WeakMap 的键名引用的对象是弱引用

const e1 = document.getElementById('foo')
const e2 = document.getElementById('bar')
const arr = [
    [e1, 'foo元素'],
    [e2, 'bar元素'],
]
在上面的代码中，e1和e2是两个对象，通过arr数组对这两个对象添加一些文字说明。
但是这样就形成了arr对e1和e2的引用，而这种引用又是强引用。它的区别就体现在。
当我们不再需要这两个对象时，我们必须手动的删除这个引用，解除arr都两个对象的引用关系，
否则垃圾回收机制不会释放e1和e2占用的内存。因为，arr仍然存在着对对象的引用

不需要 e1和e2的时候 必须手动删除引用
arr[0] = null
arr[1] = null
麻烦的操作势必会造成问题，当忘记了手动删除引用，就会造成内存泄漏
```

### Map 和 WeakMap 的区别

```
Map 的键可以是任意类型，WeakMap 只接受对象作为键（null除外），不接受其他类型的值作为键
Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键； WeakMap 的键是弱引用，键所指向的对象可以被垃圾回收，此时键是无效的
Map 可以被遍历， WeakMap 不能被遍历

WeakMap 与 Map 在 API 上的区别主要是两个，一是没有遍历操作（即没有keys()、values()和entries()方法），也没有size属性。  二是无法清空，即不支持clear方法。
因此，WeakMap只有四个方法可用：get()、set()、has()、delete()。

```
