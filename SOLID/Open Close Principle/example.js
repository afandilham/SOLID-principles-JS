class ShippingOrderService {
  checkout(product, shipping) {
    const constShipping = shipping.calculate(product);
    /* Code to do check */ 
  }
}

class Shipping {
  constructor() {
    if (this.constructor === Shipping) {
      throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly`);
    }
  }

  calculate(product) {
    throw new Error('You have to implement the method calculate');
  }
}

class JNEShipping extends Shipping {
  calculate(product) {
    return /* Calculate amount of this type with product */
  }
}

class TIKIShipping extends Shipping {
  calculate(product) {
    return /* Calculate amount of this type with product */
  }
}