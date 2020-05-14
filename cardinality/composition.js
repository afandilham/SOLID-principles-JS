class User {
  constructor(id, name, address) {
    this._id = id;
    this._name = name;
    this._address = address;
  }
}

class Address {
  constructor(id, location) {
    this._id = id;
    this._location = location;
  }
}

const main = () => {
  const user = new User('1234', 'Khalid', new Address(1, 'Surabaya'));
  console.log(user);
}

main();