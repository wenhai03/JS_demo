class Promise{
  constructor (fn) {
    this.state = 'initial'
    this.successes = []
    this.fails = []
    let resolve = (data) => {
      this.state = 'fulfilled'
      this.successes.forEach(item => item(data))
    }
    const reject = error => {
      this.state = 'failed'
      this.fails.forEach(item=>item(error))
    }
    fn(resolve, reject())
  }
  then(success,fail) {
    this.successes.push(success)
    this.fails.push(fail)
  }
}

let p = new Promise(function (resolve, reject){
  setTimeout(() => {
    resolve(1)
  }, 1000)
})

p.then(res => {
  console.log('成功', res)
}, err => {
  console.log('err -> ', err)
})

