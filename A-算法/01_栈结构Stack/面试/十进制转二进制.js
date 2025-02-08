class ArrayStack{
  constructor () {
    this.data = []
  }
  push(item){
    this.data.push(item)
  }
  pop(){
    return this.data.pop()
  }
  peek(){
    return this.data[this.data.length - 1]
  }
  isEmpty(){
    return this.data.length === 0
  }
  size(){
    return this.data.length
  }
}


function decimalToBinary (decimal) {
  const stack = new ArrayStack()

  let str = ''
  while (decimal > 0) {
    debugger
    const result = decimal % 2
    stack.push(result)
    decimal = Math.floor(decimal / 2)

  }

  while (!stack.isEmpty()) {
    str += stack.pop()
  }
  return str
}
decimalToBinary(35)
console.log('decimalToBinary() --->', decimalToBinary(35))