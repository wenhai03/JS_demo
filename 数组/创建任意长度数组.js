// 创建任意长度的数组，也可以创建任意范围的值
const a = Array.from({length: 3}, (_, i) => i)
console.log('a -> ', a)  // [1, 2, 3]
// 如果是 Array.from({length: 3})  // [ undefined, undefined, undefined ]

// 任意范围的值
const START = 2, END = 5
const a2 = Array.from({length: END - START}, (x, i) => i + START)
// [2,3,4]
console.log('a2 -> ', a2)


const LEN = 3
const obj = {a: 1}
const arr = new Array(LEN)
console.log('arr -> ', arr) //  [ <3 empty items> ]


const arr2 = new Array(LEN).fill(obj) // 如果你 .fill() 一个带有对象的数组，所有元素都引用同一个实例(即不会克隆该对象)
obj.a = '111' // fill填充是一个引用类型的值，引用类型改变填充的数组也跟变化
console.log('arr2 -> ', arr2)
