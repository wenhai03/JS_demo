class Animal {
  static fn() {
    console.log('fn Animal')
  }
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // 调用父类的构造函数，设置name属性
    this.breed = breed;
  }
  
  speak() {
    super.speak(); // 调用父类的speak方法
    console.log(`${this.name} barks.`);
  }
  
  static whatIsADog() {
    super.fn()
    console.log("A dog is a domesticated carnivore of the family Canidae.");
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak(); // Buddy makes a noise. Buddy barks.

Dog.whatIsADog(); // A dog is a domesticated carnivore of the family Canidae.

Animal.fn()
