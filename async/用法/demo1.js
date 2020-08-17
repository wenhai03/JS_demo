var v = 1000

async function a(){
  console.log(1)
  const w = await v
  console.log(3)
  console.log('w -> ', w)
  return w
}
var res = a()
console.log(2)
console.log('000000')