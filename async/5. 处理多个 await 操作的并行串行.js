const fetch = require('node-fetch')

// 用来测试延时的时间
const sleep = (timeout = 2000) => new Promise(resolve => {
  setTimeout(resolve, timeout)
})

async function getZhihuColumn (id) {
  await sleep(2000)
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
  
  const columnPromise = getZhihuColumn('feweekly')
  const toolingtipsPromise = getZhihuColumn('toolingtips')
  
  const feweekly = await columnPromise
  const toolingtips = await toolingtipsPromise
  
  console.log(`TITLE: ${feweekly.title}`)
  console.log(`INTRO: ${feweekly.intro}`)
  
  console.log(`toolingtips: ${toolingtips.title}`)
  console.log(`toolingtips: ${toolingtips.intro}`)
  
  console.timeEnd('showColumnInfo')
}
showColumnInfo()



/*
async function getZhihuColumn (id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  if (response.status !== 200) {
    throw new Error(response.statusText)
  }
  
  return await response.json()
}

// 并行执行,这样的好处是让代码执行的更快，api返回更快
const showColumnInfo = async () => {
  try {
    const columnPromise = getZhihuColumn('feweekly')
    const toolingtipsPromise = getZhihuColumn('toolingtips')
    
    const feweekly = await columnPromise
    const toolingtips = await toolingtipsPromise
    
    
    console.log(`TITLE: ${feweekly.title}`)
    console.log(`INTRO: ${feweekly.intro}`)
    
    console.log(`toolingtips: ${toolingtips.title}`)
    console.log(`toolingtips: ${toolingtips.intro}`)
  } catch (err) {
    console.err('err捕获到错误------')
  }
}
*/


/*
async function getZhihuColumn(id) {
  await sleep(2000)
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  if (response.status !== 200) {
    throw new Error(response.statusText)
  }
  
  return await response.json()
}

// 串行执行的结果
const showColumnInfo = async () => {
  console.time('showColumnInfo')
  try {
    const column = await getZhihuColumn('feweekly')
    const toolingtips = await getZhihuColumn('toolingtips')
    console.log(`TITLE: ${column.title}`)
    console.log(`INTRO: ${column.intro}`)
  
    console.log(`toolingtips: ${toolingtips.title}`)
    console.log(`toolingtips: ${toolingtips.intro}`)
  } catch (err) {
    console.err('err捕获到错误------')
  }
  console.timeEnd('showColumnInfo')
}

*/
