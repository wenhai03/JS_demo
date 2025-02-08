var count = 1
var obj = {
  a: 100
}
export {
  count,
  obj
}

export function increment () {
  count++
}

export function changeObj () {
  obj.a = 200
}
