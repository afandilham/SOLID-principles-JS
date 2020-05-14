class Payment {
  setPaymentName() { }
  setAmount() { }
  bankID() { }
  virtualBankID() { }
  accountID() { }
}

let eWalletProviderMixins = Base => class extends Base {
  accountID() { }
  walletProviderID() { }
}

let bankProviderMixins = Base => class extends Base {
  bankID() { }
  virtualAccount() { }
}

class PaymentProvider { 
  PaymentName() { }
  amount() { }
}

// Interface Implementation
class Gopay extends eWalletProviderMixins(PaymentProvider) {
  PaymentName() { }
  amount() { }
  accountID() { }
  walletProviderID() { }
}

class OVO extends eWalletProviderMixins(PaymentProvider) {
  PaymentName() { }
  amount() { }
  accountID() { }
  walletProviderID() { }
}

class Mandiri extends bankProviderMixins(PaymentProvider) {
  PaymentName() { }z
  PaymentName() { }
  amount() { }
  bankID() { }
  virtualAccount() { }
}

class BNI extends bankProviderMixins(PaymentProvider) {
  PaymentName() { }z
  PaymentName() { }
  amount() { }
  bankID() { }
  virtualAccount() { }
}