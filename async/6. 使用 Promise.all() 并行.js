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

// Promise.all 并行
const showColumnInfo = async () => {
  console.time('showColumnInfo')
  const [feweekly, toolingtips] = await Promise.all([
    getZhihuColumn('feweekly'),
    getZhihuColumn('toolingtips')
  ])
  
  console.log(`TITLE: ${feweekly.title}`)
  console.log(`INTRO: ${feweekly.intro}`)
  
  console.log(`toolingtips: ${toolingtips.title}`)
  console.log(`toolingtips: ${toolingtips.intro}`)
  
  console.timeEnd('showColumnInfo')
}

showColumnInfo()