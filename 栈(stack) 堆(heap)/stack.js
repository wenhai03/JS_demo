class Stack {
  items = []
  push(element) {
    this.items.push(element)
  }
  pop (){
    return  this.items.pop()
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
