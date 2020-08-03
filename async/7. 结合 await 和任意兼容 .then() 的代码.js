const bluebird = require('bluebird')

async function main() {
  console.log('waiting...')
  await bluebird.delay(2000)
  console.log('done！')
  
}
main()


/*
async function main() {
  const number = await 890
  // 相当于异步的转成promise
  // const number = await Promise.resolve(890)
  console.log('number------', number)
}

main()
*/
