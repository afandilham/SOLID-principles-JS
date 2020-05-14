let oviparMixins = Base => class extends Base { }

let viviparMixins = Base => class extends Base { }

class Ovivipar { }

class Snake extends oviparMixins(viviparMixins(Ovivipar)) { }
