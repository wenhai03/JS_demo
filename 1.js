var arr = [1,2,3,1,1]

function arrMax(arr, item){
  arr.reduce((total,cur)=>{
    total += item === cur ? 1 : 0
    return total
  }, 0)
}


let r = arrMax(arr, 1)