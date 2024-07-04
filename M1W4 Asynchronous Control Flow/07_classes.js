class Car {
  constructor(make, model, color) { 
    this.make = make;
    this.model = model;
    this.color = color;
  }

  get color() {
    return this.color
  }

  getModel () {
    return this.model
  }

  getMake () {
    return this.make
  }

  set setColor(newColor) {
    this.color = newColor
  }

  setMake(newMake) {
    this.make = newMake
  }

  setModel(newModel) {
    this.model = newModel
  }

  everythingAboutMyCar() {
    return `Your car is a ${this.make} ${this.model} in the color ${this.color}`
  }
}

const car1 = new Car('Honda', 'RV4', 'Green')

console.log(car1.color());

car1.setColor('Blue')

console.log(car1.color());

console.log(car1.everythingAboutMyCar());


class ECar extends Car { 
  constructor(battery) {
    super(make, model, color)
    this.battery = battery
  }
}
