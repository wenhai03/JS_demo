var r = ['00:00', '01:00', '14:00', '23:00'].reduce((res,v,i, arr) => {
  if(i && Number(v.slice(0,2)-arr[i-1].slice(0,2))===1) {
    if (res[res.length-1]) {
      res[res.length-1].push(v)
    } else{
      [].push(v)
    }
    // (res[res.length-1] ||= []).push(v)
  }
  else res.push([v])
  return res
}, [])
console.log('r -> ', r)
r = r.map((m, i) => {
  // console.log('m -> ', m.length)
  if(m.length === 1) return [m[0], `${m[0].slice(0,2)}:59`]
  return [m[0], m[m.length-1]]
})
console.log('r r -> ', r )
//console.log(r[1])
// r = r.map((m, i)=>{
//   console.log('------',i)
//   if(m.length === 1) return [m[0], `${m[0].slice(0,2)}:59`]
//   return [m[i], m[m.length-1]]
//
// })
