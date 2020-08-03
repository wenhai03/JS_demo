const fetch = require('node-fetch')

async function getZhihuColumn(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  /*const column = await response.json()
  return column*/
  
  return await response.json()
}

getZhihuColumn('feweekly').then(column => {
  console.log(`TITLE: ${column.title}`)
  console.log(`INTRO: ${column.intro}`)
})