const colors = [
  { name: 'red', value: '#ff0000' },
  { name: 'blue', value: '#0000ff' },
  { name: 'green', value: '#00ff00' },
  { name: 'yellow', value: '#ffff00' },
]

// for-of-loop
let colorMap = {}
for (const color of colors) {
  colorMap[color.name] = color.value
}


// accumulator（累计值，初始值即为传入的第二个参数或者数组的第一个元素）、
// currentValue（当前元素值）、
// currentIndex（当前元素下标）
// array（当前数组）。回调函数执行后返回的值会作为下一次迭代的累计值。
colorMap = colors.reduce((acc, color) => {
  acc[color.name] = color.value
  return acc
}, {})

colorMap = Object.fromEntries(colors.map(({ name, value }) => [name, value]))

console.log('colorMap --->', colorMap)


const map = new Map([
  ['a', [{ a: 100 }]]
])

const obj = Array.from(map).reduce((obj, [key, value]) => {
  obj[key] = value
  return obj
}, {})

console.log(obj) // {a: [{a: 100}]}


const map2 = new Map([
  ['a', [{ a: 100 }]]
])

const obj2 = Object.fromEntries(map2)

console.log(obj2) // {a: [{a: 100}]}

// -----------

const data = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];


const res = Object.fromEntries(
  data.map((item) => [item.name, { name: item.name, age: item.age }])
)
/*
*
* {
   Alice: { name: 'Alice', age: 25 },
   Bob: { name: 'Bob', age: 30 },
   Charlie: { name: 'Charlie', age: 35 },
  }
 *
*
* */