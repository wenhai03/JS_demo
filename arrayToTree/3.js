var arr = [
  {id: 6, name: '部门xxxxx', pid: 5},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 1, name: '部门1', pid: 0},
  {id: 5, name: '部门5', pid: 4},
]

function arrayToTree (items) {
  const r = []   // 存放结果集
  const itemMap = {}
  for (const item of items) {
    const {id, pid} = item
    itemMap[id] = {...item, children: []}
    const treeItem = itemMap[id]
    pid === 0 ? r.push(treeItem) : itemMap[pid].children.push(treeItem)
  }
  return r
}

console.log('arrayToTree(arr)', JSON.stringify(arrayToTree(arr), null, 2))
