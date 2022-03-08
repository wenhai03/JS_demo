let data = {
  a: 2
}

let p = reactive(data)
function reactive(data) {
  return new Proxy(data, {
    get(target, key, receiver){
      console.log('get value', target, key)
      let res = Reflect.get(target, key, receiver)
      return res
    },
    set(target, key, value, receiver){
      console.log('set value', key, value)
      return Reflect.set(target, key, value, receiver)
    },
  })
}
console.log('p -> ', p)
