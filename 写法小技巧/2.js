let arr = ['11:00', '12:00', '13:00', '21:00', '22:00', '23:00']
let a = null
arr = JSON.parse(JSON.stringify(arr)).map(item=>+item.slice(0, 2))
console.log('arr -> ', arr)
for (let i=0;i<arr.length;i++){
  if (arr[i] +1 === arr[i+1]) {
    console.log('这个值是相等', arr[i])
  } else {
    if (arr[i] === arr[arr.length-1]) {
      continue
    }
    console.log('这个值是bubub相等', arr[i])
  }
}
