class Sum {
  sum (a, b) {
    return a + b
  }
}

class Minus {
  minus (a, b) {
    return a - b
  }
}

class Multiply {
  multiply (a, b) {
    return a * b
  }
}

class Divide {
  divide (a, b) {
    return a / b
  }
}

class Calculator {
  constructor () {
    this.sumObj = new Sum()
    this.minusObj = new Minus()
    this.multiplyObj = new Multiply()
    this.divideObj = new Divide()
  }
  
  sum (a, b) {
    return this.sumObj.sum(a, b)
  }
  
  minus (a, b) {
    return this.minusObj.minus(a, b)
  }
  
  multiply (a, b) {
    return this.multiplyObj.multiply(a, b)
  }
  
  divide (a, b) {
    return this.divideObj.divide(a, b)
  }
}

const calculator = new Calculator()
const r = calculator.divide(1, 2)
console.log('r -> ', r)

console.log('calculator.sum(1,2) -> ', calculator.sum(1,2))
console.log('calculator.minus(1,2) -> ', calculator.minus(1,2))
console.log('calculator.multiply(1,2) -> ', calculator.multiply(1,2))

