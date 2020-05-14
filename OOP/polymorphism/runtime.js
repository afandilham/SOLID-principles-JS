class Animal {
  walk() {
    console.log(`${this.constructor.name} walk!`);
  }
}

class Cat extends Animal {
  walk() {
    super.walk();
    console.log(`Yeay! ${this.constructor.name} walked!`);
  }
}

const main = () => {
  const cat = new Cat();
  cat.walk()
};

main();