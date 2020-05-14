class Car {
  constructor(name = null, color = null, 
      width = null, length = null, seats = null) {
    this._name = name;
    this._color = color;
    this._width = width;
    this._length = length;
    this._seats = seats;
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }
  
  set color(value) {
    this._color = value;
  }

  get color() {
    return this._color;
  }
  set width(value) {
    this._width = value;
  }

  get width() {
    return this._width;
  }
  
  set length(value) {
    this._length = value;
  }

  get length() {
    return this._length;
  }

  set seats(value) {
    this._seats = value;
  }

  get seats() {
    return this._seats;
  }
}

const main = () => {
  const Alphard = new Car();
  Alphard.name = 'Toyota Alphard';
  Alphard.color = 'White';
  Alphard.width = '1850 mm';
  Alphard.length = '1895 mm';
  Alphard.seats = 7;

  const Avanza = new Car('Avanza 1.5 G MT', 'Black', '1660 mm', '1695 mm', 6);
  const Mitsubishi = new Car('Mitsubishi Eclipse Cross', 'Red', '1700 mm', '1760 mm', 5); 
}

main();