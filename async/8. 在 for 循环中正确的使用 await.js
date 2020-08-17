const fetch = require('node-fetch')
const bluebird = require('bluebird') // 用来测试延时的时间

async function getZhihuColumn (id) {
  await bluebird.delay(1000)
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  if (response.status !== 200) {
    throw new Error(response.statusText)
  }
  
  return await response.json()
}

// 并行,在for of 循环，让代码执行更快
const showColumnInfo = async () => {
  console.time('showColumnInfo')
  
  const names = ['feweekly', 'toolingtips']
  const promises = names.map(x => getZhihuColumn(x))
  
  for (const promise of promises) {
    const column = await promise
    console.log('column -> ', column)
    console.log(`TITLE: ${column.title}`)
    console.log(`INTRO: ${column.intro}`)
    
  }
  
  console.timeEnd('showColumnInfo')
}
showColumnInfo()

/*
// 串行，在for of循环中请求接口数据
async function getZhihuColumn (id) {
  await bluebird.delay(1000)
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  if (response.status !== 200) {
    throw new Error(response.statusText)
  }
  
  return await response.json()
}

// 并行执行,这样的好处是让代码执行的更快，api返回更快
const showColumnInfo = async () => {
  console.time('showColumnInfo')
 
  const names = ['feweekly', 'toolingtips']
  
  for (const name of names) {
    const column = await getZhihuColumn(name)
    console.log(`TITLE: ${column.title}`)
    console.log(`INTRO: ${column.intro}`)
  }
  
  console.timeEnd('showColumnInfo')
}
showColumnInfo()
*/

