class ProductService {
  constructor() {
    throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`);
  }

  getProduct(id) {
    throw new Error('You have to implement the method getProduct!');
  }

  calculateProductPrice() {
    throw new Error('You have to implement the method calculateProductPrice!');
  }
}

class ProductServiceImpl extends ProductService {
  getProduct(id) {
      // implementation code
  }

  calculateProductPrice() {
      // implementation code
  }
}