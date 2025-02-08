class ArrayStack{
  constructor () {
    this.data = []
  }
  push(item){
    this.data.push(item)
  }
  pop(){
    console.log('pop')
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


function isValid (s) {
  const stack = new ArrayStack()

  // 遍历s中所有的括号
  for (let i = 0; i < s.length; i++) {
    const c = s[i]

    debugger
    switch (c){
      case '{':
        stack.push('}')
        break
      case '[':
        stack.push(']')
        break
      case '(':
        stack.push(')')
        break
      default:
        if (c!==stack.pop()) return false
    }

  }

  return stack.isEmpty()
}

// console.log(isValid('(){}'))
console.log(isValid('({}[])'))
// console.log(isValid('({}[]){'))
