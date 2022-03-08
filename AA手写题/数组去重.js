/*
* 简单版
* */
let arr = [1, 1, 1, 22, 3, 4, 4]
let res = [...new Set(arr)]
console.log(res)

/*
* 数组对象去重
* */
// 数组对象去重
let arr2 = [{a: 1, b: 2}, {a: 1, b: 2}, {a: 3, b: 1}, {a: 5, b: 2}, {a: 3, b: 1}]

let r = arr2.reduce((pre, cur) => {
  let i = pre.findIndex(v => JSON.stringify(v) === JSON.stringify(cur))
  if (i === -1) {
    pre.push(cur)
  }
  return pre
}, [])
// 法2
const r2 = Array.from(
  arr.reduce((pre, cur) => pre.set(JSON.stringify(cur), cur), new Map)
    .values()
)
// 法3
Array.from(
  new Set(arr2.map(v => JSON.stringify(v)))).map(v => JSON.parse(v)) === [...new Set(arr.map(e => JSON.stringify(e)))].map(e => JSON.parse(e)
)

// 法4
function unique (arr, key) {
  const map = new Map()
  return arr.filter((item) => !map.has(item[key] + '') && map.set(item[key] + '', 1))
}
