let fs = require('fs')

class EventEmitter {
  _arr = []
  on(callback) {
    this._arr.push(callback)
  }
  emit(...args) {
    this._arr.forEach(fn => fn(...args))
  }
}

let e = new EventEmitter()

let res = {}
e.on(function (data, key){
  res[key] = data
  if (Object.keys(res).length ===2) {
    console.log('res -> ', res)
  }
  // console.log('一个接口成功的调用 -> ')
})

fs.readFile('./name.txt', 'utf8', function(err, data) {
  if (err) return console.log(err)
  
  e.emit('name', data)
  
})
fs.readFile('./age.txt', 'utf8', function(err, data) {
  if (err) return console.log(err)
  
  e.emit('age', data)
})
