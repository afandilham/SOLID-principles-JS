class Animal {
  walk() {
    console.log(`${this.constructor.name} walk!`);
  }
}

class Cat extends Animal {
  walk() {
    console.log(`${this.constructor.name} walked!`);
  }
}