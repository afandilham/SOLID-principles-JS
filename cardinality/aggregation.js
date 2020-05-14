class Shop {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  set seller(value) {
    this._seller = value;
  }

  get seller() {
    return this._seller;
  }
}

class Seller {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }
}


const shop1 = new Shop(1, 'Robocop shop');
shop1._seller = new Seller(1, 'seller Bukalapak');

const shop2 = new Shop(1, 'Noice shop');
shop2._seller = new Seller(2, 'seller Tokopedia');

console.log(shop1);
console.log(shop2);