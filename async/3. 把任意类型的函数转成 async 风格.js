const fetch = require('node-fetch')


// 写法3 在类中使用
class APIClient {
  async getColumn(id) {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    const response = await fetch(url)
    return await response.json()
  }
}

(async () => {
  const client = new APIClient()
  const column = await client.getColumn('feweekly')
  console.log(`TITLE: ${column.title}`)
  console.log(`INTRO: ${column.intro}`)
})()


/*
// 写法2
const getZhihuColumn = async (id) => {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  return await response.json()
}

(async () => {
  const column = await getZhihuColumn('feweekly')
  console.log(`TITLE: ${column.title}`)
  console.log(`INTRO: ${column.intro}`)
})()
*/


/*
// 写法1
const getZhihuColumn = async (id) => {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  return await response.json()
}

getZhihuColumn('feweekly').then(column => {
  console.log(`TITLE: ${column.title}`)
  console.log(`INTRO: ${column.intro}`)
})*/

