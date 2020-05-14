class Product {
  constructor(id, name, price) {
    if (this.constructor === Product) {
      throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`);
    }
    this._id = id;
    this._name = name;
    this._price = price;
  }
}

class ElectronicProduct extends Product {
  constructor(id, name, price, productionDate) {
    super(id, name, price);
    this._productionDate = productionDate;
  }
}

class ConsumableProduct extends Product {
  constructor(id, name, price, expirationDate) {
    super(id, name, price);
    this._expirationDate = expirationDate;
  }
}