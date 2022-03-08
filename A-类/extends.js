class Person {
  constructor (name, sex) {
    this.name = name
    this.sex = sex
    this.say = function () {}
  }
  
  speak() {
    console.log('speak')
  }
  static speak() {
    console.log('static speak')
  }
  
}

Person.version = '1.0'

class Programmer extends Person {
  constructor (name, sex) {
    super(name, sex);
  }
}
