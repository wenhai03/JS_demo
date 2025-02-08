/*
// 简单版本
let arr = [1, 1, 1, 22, 3, 4, 4]
let res = [...new Set(arr)]
console.log(res)
*/


const arr = [
  { id: 1, name: '小明', },
  { id: 2, name: '张三', },
  { id: 1, name: '小明', },
  { id: 4, name: '李四', },
  { id: 2, name: '张三', },
  { id: 5, name: '王五', },
]

const unique = (arr) => {
  const map = new Map()
  
  setTimeout(() => {
   map.clear()
  })
  return arr.reduce((prev, cur) => {
    // 当前map中没有，说明可以和上一个合并
    debugger
    if (!map.has(cur.id)) {
      map.set(cur.id, true)
      return [...prev, cur]
    } else {
      // 已经被标记的就不用合并了,返回上次的 pre
      return prev
    }
  }, [])
}

console.log('unique(arr) --->', unique(arr))

// 在每次迭代中，将当前元素（cur）添加到累积值（pre）中。累积值是一个Map对象，它的键是对象的字符串表示形式，值是原始对象
// 使用values()方法获取Map对象中的 所有值
// 使用[...] 或者 Array.from()方法将其转换为数组
const r2 = [...arr.reduce((pre, cur) => pre.set(JSON.stringify(cur), cur), new Map).values()]

console.log('r2 --->', r2)
// console.log('res', unique(arr))


