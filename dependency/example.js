class Shopservice {

  changeProductPrice(price, product) {
    product.changePrice(price);
    console.log(`New price : ${price} for ${product._name} product`);
  }
}

class Product {
  constructor(id, name, price) {
    this._id = id;
    this._name = name;
    this._price = price;
  }
  
  changePrice(value) {
    this._price = value;
  }
}

const shop_service = new Shopservice();
const product = new Product(1, 'Coffee', 'Rp. 12.000');

shop_service.changeProductPrice('Rp. 13.000', product);