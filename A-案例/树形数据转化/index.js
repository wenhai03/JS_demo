const treeData = formatDataTree(data)

for (var i = 0; i <1000000000; i++) {}
setTimeout(() => {
  console.log('set timeout')
})

requestAnimationFrame(() => {
  console.log('requestAnimationFrame')
})



/*function formatDataTree (data) {
  const _data = JSON.parse(JSON.stringify(data))
  
  const result = _data.filter(p => {
    const _arr = _data.filter(c => {
      return c.pid === p.id
    })
    _arr.length && (p.children = _arr)
    return p.pid === 0
  })
  
  return result
}*/


function formatDataTree (data) {
  
  let parents = data.filter(p => p.pid === 0),
    children = data.filter(p => p.pid !== 0)
  dataToTree(parents, children)
  
  function dataToTree (parents, children) {
    parents.map(p => {
      children.map((c, i) => {
        if (p.id === c.pid) {
          const _children = JSON.parse(JSON.stringify(children))
          _children.splice(i, 1)
          dataToTree([c], _children)
          
          if (p.children) {
            p.children.push(c)
          } else {
            p.children = [c]
          }
        }
      })
    })
    
  }
  
  console.log('parents --->', parents)
  
  return parents
}
