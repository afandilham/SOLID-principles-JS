class PaymentService {
  constructor(database) {
    this.database = database;
  }

  paymentIsValid() {
    // Implementation code
  }

  openDatabase() {
    // Implementation code
  }

  addNewPayment() {
    // Implementation code
  }

  removePaymentByID() {
    // Implementation code
  }

  updatePaymentByID() {
    // Implementation code
  }
}


class Database {
  constructor() {
    throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`);
  }
  insert() {
    throw new Error('You have to implement the method insert!');
  }
  update() {
    throw new Error('You have to implement the method update!');
  }
  delete() {
    throw new Error('You have to implement the method delete!');
  }
}

class MySQLDatabase extends Database {
  insert() {
    // Implementation code
  }

  update() {
    // Implementation code
  }

  delete() {
    // Implementation code
  }
}

class MongoDatabase extends Database {
  insert() {
    // Implementation code
  }
  update() {
    // Implementation code
  }
  delete() {
    // Implementation code
  }
}