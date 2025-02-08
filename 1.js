let utils = ['克', '千克']
let attrs = [
  {name: 'size', values: ['S', 'M']},
  {name: 'color', values: ['红色', '白色']},
  {name: 'pic', values: ['老虎', '老鼠']},
]
let resList = []
let attrList = []

function generateProducts(current, attrs, resList) {
  if (attrs.length === 0) {
    // 如果属性数组为空，则说明已经组合完了一个产品，将其加入到结果数组中
    resList.push(current)
    return
  }

  const attr = attrs[0]
  for (let value of attr.values) {
    const next = {...current, [attr.name]: value}
    generateProducts(next, attrs.slice(1), resList)
  }
}

const products = []
generateProducts({}, attrs, products)
console.log('products --->', products)
for (let product of products) {
  for (let util of utils) {
    const res = { ...product, util }
    resList.push(res)
  }
}

console.log('resList --->', resList)





/*
for (const attr of attrs) {
  const {name, values} = attr
  for (const value of values) {
    const item = {
      [name]: value,
    }

    attrList.push(item)
  }

}

utils.forEach(key => {
  const item = {util: key}
  attrList
  
})

console.log('attrList --->', attrList)*/
