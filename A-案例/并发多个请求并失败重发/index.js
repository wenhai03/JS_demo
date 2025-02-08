class RequestList {
  map = {}
  list = []
  success = []
  error = []
  
  constructor (fnlist, reTryTime = 3) {
    this.list = fnlist
    fnlist.forEach((fn, index) => {
      let _id = 'id_' + index
      // 用id和方法，映射进map
      this.map[_id] = fn
      // 把id给到方法到静态属性
      fn.id = _id
      fn.hasTry = 0
      fn.reTry = reTryTime
    })
    
  }
  createPromise(fn){
    return new Promise((resolve, reject) => {
      fn().then(res => {
        resolve({
          id: fn.id,
          value: res,
        })
      }).catch(err => {
        reject({
          id: fn.id,
          value: err,
        })
      })
    })
  }
  
  send() {
    return new Promise((resolve, reject) => {
      // 待请求队列
      let _que = []
      this.list.forEach((fn) => {
        _que.push(this.createPromise(fn))
      })
      // 因为到时候失败了，再次调用allSettled重发
      const sendAllSettled = () => {
        Promise.allSettled(_que).then((resList)  => {
          // 发送完后 先请求
          _que = []
          resList.forEach((item)  => {
            if (item.status==='fulfilled') {
              
              this.success.push(item.value.value)
            } else {
              // 如果失败则找出
              let _id = item.reason.id
              let _fn = this.map[_id]
              // 是否超出最次数
              if (_fn.hasTry < _fn.reTry) {
                
                //
                _que.push(this.createPromise(fn))
                _fn.hasTry+=1
              } else {
                this.error.push(item.value.value)
              }
              
              if (_que.length===0) {
                
                resolve({
                  success: this.success,
                  error: this.error
                })
              } else {
                sendAllSettled()
              }
            }
          })
        })
      }
      
      sendAllSettled()
    })
  }
  
}

new RequestList([]).send().then(res => {
  console.log('res --->', res)
})