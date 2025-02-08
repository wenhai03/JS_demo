class ArrayStack {
  constructor () {
    this.data = []
  }

  push (item) {
    this.data.push(item)
  }

  pop () {
    return this.data.pop()
  }

  peek () {
    return this.data[this.data.length - 1]
  }

  isEmpty () {
    return this.data.length === 0
  }

  size () {
    return this.data.length
  }
}


export default ArrayStack