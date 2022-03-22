function rotate1 (arr, k) {
  const length = arr.length
  if (!k || length === 0) return arr
  const step = Math.abs(k % length)
  console.log('step -> ', step)
  for (let i = 0; i < step; i++) {
    const n = arr.pop()
    if (n) {
      arr.unshift(n)
    }
  }
  return arr
}

function rotate2 (arr, k) {
  const length = arr.length
  if (!k || length === 0) return arr
  const step = Math.abs(k % length)
  
  const part1 = arr.slice(-step)
  const part2 = arr.slice(0, length-step)
  return part1.concat(part2)
}

const arr = [1, 2, 3, 4, 5, 6, 7]
const arr1 = rotate1(arr, 3)
const arr2 = rotate2([1, 2, 3, 4, 5, 6, 7], 3)
// console.info(`${arr1}`)
console.info(`${arr2}`)
