let bluebird = require('bluebird')
let fs = require('fs')
let read = bluebird.promisify(fs.readFile)


//await 命令后面的 Promise 对象，运行结果可能是 //rejected，所以最好把 await 命令放在 try...catch 代码块中。

async function r(){
  try{
    let content1 = await read('1.txt','utf8')
    // let content2 = await read(content1,'utf8')
    return content1
  }catch(e){
    console.log('err',e)
  }
}

r().then(function(data){
  console.log('data',data)
},function(err){
  console.log('err1',err)
})
