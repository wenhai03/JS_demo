const fetch = require('node-fetch')


/*// 正常的代码调用
function getZhihuColumn(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  
  fetch(url).then(response  => response.json())
    .then(column => {
      console.log(`TITLE: ${column.title}`)
      console.log(`INTRO: ${column.intro}`)
    })
  
}
*/

// 这样写更像同步

async function getZhihuColumn(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  const column = response.json()
  
  console.log(`TITLE: ${column.title}`)
  console.log(`INTRO: ${column.intro}`)
}

getZhihuColumn('feweekly')