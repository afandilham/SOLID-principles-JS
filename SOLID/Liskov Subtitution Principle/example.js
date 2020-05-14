class Product {
  constructor() {
    if (this.constructor === Product) {
      throw new TypeError(`Abstract class "${this.constructor.name} cannot be instantiated"`);
    }
  }

  changeExpiredDate() {
    throw new Error('You have to implement the method changeExpiredDate');
  }
}

class Food extends Product {
  changeExpiredDate() {
    // Implementation code
  }
}

class ElectronicProduct extends Product {
  changeExpiredDate() {
    // Implementation code
  }
}

class Smartphone extends ElectronicProduct { }