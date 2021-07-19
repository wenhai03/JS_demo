var arr = [
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
  return r;
}
console.log('arrayToTree(arr)', JSON.stringify(arrayToTree(arr), null, 2))
