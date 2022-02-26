let fs = require('fs')

function after(times,callback){
  let result = {}
  return function (key, data) {
    result[key] = data
    if (--times === 0) {
      callback(result)
    }
  }
}

let newFn = after(2, function(result) { // 这个方法会在所有异步方法执行之后执行
  console.log(result)
})

fs.readFile('./name.txt', 'utf8', function(err, data) {
  if (err) {
    return console.log(err)
  }
  newFn('name', data)
})
fs.readFile('./age.txt', 'utf8', function(err, data) {
  if (err) {
    return console.log(err)
  }
  newFn('age', data)
})
