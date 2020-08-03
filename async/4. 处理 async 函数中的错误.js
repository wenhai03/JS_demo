const fetch = require('node-fetch')

async function getZhihuColumn(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  if (response.status !== 200) {
    throw new Error(response.statusText)
  }
  
  return await response.json()
}

// 在这里的catch可以捕获到错误
const showColumnInfo = async (id) => {
  try {
    const column = await getZhihuColumn(id)
    console.log(`TITLE: ${column.title}`)
    console.log(`INTRO: ${column.intro}`)
  } catch (err) {
    console.err('err捕获到错误------')
  } 
}

showColumnInfo('feweekly')


/*
async function getZhihuColumn(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  if (response.status !== 200) {
    throw new Error(response.statusText)
  }
  
  return await response.json()
}

// 在这里的catch可以捕获到错误
getZhihuColumn('feweekly123').then(column => {
  console.log(`TITLE: ${column.title}`)
  console.log(`INTRO: ${column.intro}`)
}).catch(err => {
   console.log('捕获到错误------')
})
*/


/*
// 还为改进的接口错误
async function getZhihuColumn(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  /!*const column = await response.json()
  return column*!/
  
  return await response.json()
}

getZhihuColumn('feweekly123').then(column => {
  console.log(`TITLE: ${column.title}`)
  console.log(`INTRO: ${column.intro}`)
})
*/
