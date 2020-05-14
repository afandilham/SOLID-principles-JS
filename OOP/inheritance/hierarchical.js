class Animal {
  walk() {
    console.log(`${this.constructor.name} walk!`);
  }
}

class Carnivore extends Animal {
  eat() {
    console.log(`${this.constructor.name} eat!`);
  }
}

class Cat extends Carnivore {}

class Lion extends Carnivore {}

class Dog extends Carnivore {}