class Seller {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }
}

class User {
  constructor(id, name, sellers) {
    this._id = id;
    this._name = name;
    this._sellers = sellers;
  }
}

const seller = new Seller(1, 'John');

const user = new User(1, 'Marry', seller);

console.log(user._sellers);