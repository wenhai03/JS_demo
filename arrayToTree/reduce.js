var arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
  {id: 6, name: '部门xxxxx', pid: 5},
]

let newData = Array.from(arr.reduce((pre, cur) => {
  let k = cur.id
  let x = pre.get(k) || {...cur, children: [],}
  x.children.push(cur)
  return pre.set(k, x)
}, new Map()).values())

console.log(newData)

  // .map(([id, arr]) => ({date, time: arr.join('、')}))
// var map = new Map(arr.map(x=>[x.id, x]))
// var r = arr.reduce((pre, cur) => {
//   const {id, pid} = cur
//   const treeItem = map.get(id)
//   pid === 0 ? pre.push(treeItem) : pre.children.push(treeItem)
//
//   return pre
// }, [])
//
// console.log('r', JSON.stringify(r, null, 2))
