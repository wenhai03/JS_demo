function deepClone(obj, hash = new WeakMap) {
  if (!Boolean(obj) || typeof obj !== 'object') return obj // obj 如果是null、undefined、基础类型
  if (obj instanceof Date) return new Date(obj) // 日期情况
  if (obj instanceof RegExp) return new RegExp(obj) // 正则情况
  if (hash.get(obj)) return hash.get(obj)
  // [] {} Object.prototype.soString.call(obj) === [object Array] ? [] : {}
  const cloneObj = new obj.constructor
  hash.set(obj, cloneObj)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) cloneObj[key] = deepClone(obj[key]) // 实现递归拷贝
  }
  return cloneObj
}

let obj = {a:1}
const d = deepClone(obj)

console.log('d -> ', d)



