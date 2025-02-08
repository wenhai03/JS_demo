var arr = [
  {id: 0, name: '部门00', pid: 0},
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
  {id: 6, name: '部门xxxxx', pid: 5},
]

function arrayToTree(items) {
  const r = [];   // 存放结果集
  const obj = {};  //
 
  for (const item of items) {
    const {id, pid} = item;
    obj[id] = {...item, children: []}
    const treeItem =  obj[id];
    pid === 0 ? r.push(treeItem) : obj[pid].children.push(treeItem)
  }
  debugger
  return r;
}

function arrayToTree2(items) {
  const _data = JSON.parse(JSON.stringify(items))
  return _data.filter(p=> {
    const c = _data.filter(c=> c.id === p.pid)
    c.length > 0 && (p.children = c)
    return p.pid === 0
  })
}
// console.log('arrayToTree(arr)', JSON.stringify(arrayToTree(arr), null, 2))

console.log('arrayToTree2(items) --->', arrayToTree2(arr))
