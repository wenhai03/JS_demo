var a = async (index) => {
  console.log("a0" + index)
  await console.log("a1" + index)
  console.log("a2" + index)
  console.log('test -> ')
}

async function example () {
  const nums = [2, 2]
  
  nums.forEach(async (num, index) => {
    console.log(`forEach${index}`)
    const b = await a(index)
    console.log(index)
  })
  console.log('out')
}

example()
console.log('example finished')
