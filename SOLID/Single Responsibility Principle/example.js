class FoodService {
  constructor(id, name, date) {
    this.id = id;
    this.name = name;
    this.date = date;
  }
  
  addToStore() {
    if (!FoodExpiry.isExpired(this.date)) {
      // Add to store
    }
  }
}

class FoodExpiry {
  static isExpired(date) {
    const stringDateArrray = date.split('/');
    const foodDate = new Date(...stringDateArrray);
    return foodDate >= new Date();
  }
}