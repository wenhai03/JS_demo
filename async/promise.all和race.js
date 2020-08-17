
/*
*
* Promise.all可以将多个实例组成一个新的实例，成功的时候返回一个成功数组，失败时候这返回最先被reject失败状态的值
* */


/*
*
* race赛跑的意思，也就是说Promise.race([p1, p2, p3])里面的结果哪个获取的快，就返回哪个结果，不管结果本身是成功还是失败
* */

/*
let p1 = new Promise(() => {
   setTimeout((resolve, reject) => {
      resolve('success')
   }, 1000) 
})
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('failed')
  }, 500)
})

Promise.race([p1, p2]).then(res => {
   console.log('res -> ', res) 
}).catch(err => {
   console.log('err -> ', err) 
})
*/


/*
// 处理多个请求，当有个接口错误时候的提醒

//1.获取轮播图数据列表
function getBannerList(){
  return new Promise((resolve,reject)=>{
    setTimeout(function(){
      // resolve('轮播图数据')
      reject('获取轮播图数据失败啦')
    },300)
  })
}

//2.获取店铺列表
function getStoreList(){
  return new Promise((resolve,reject)=>{
    setTimeout(function(){
      resolve('店铺数据')
    },500)
  })
}

//3.获取分类列表
function getCategoryList(){
  return new Promise((resolve,reject)=>{
    setTimeout(function(){
      resolve('分类数据')
    },700)
  })
}

function initLoad(){
  // loading.show()
  Promise.all([
    getBannerList().catch(err=>err),
    getStoreList().catch(err=>err),
    getCategoryList().catch(err=>err)
  ]).then(res=>{
    console.log('initLoad', res) // ["获取轮播图数据失败啦", "店铺数据", "分类数据"]
    if(res[0] == '轮播图数据'){
      //渲染
    }else{
      //获取 轮播图数据 失败的逻辑
    }
    if(res[1] == '店铺数据'){
      //渲染
    }else{
      //获取 店铺列表数据 失败的逻辑
    }
    if(res[2] == '分类数据'){
      //渲染
    }else{
      //获取 分类列表数据 失败的逻辑
    }
    // loading.hide()
  })
}

initLoad()
*/
