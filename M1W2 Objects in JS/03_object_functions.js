const car = {
  color: "Yellow",
  model: "F1 Focus",
  brand: "Ford",
  info: {
    km: 20000,
    year: 2019,
    printInfo: function() {
      console.log(`${this.km}`);
    }
  },
  startTheCar: function() {
    console.log(`Starting the car ${this.model} - the car has ${this.info.km}km on it`);
  },
  turnOffCar: function() {
    console.log('Turning off the car');
  }
}

car.startTheCar()

car.info.printInfo()

// console.log(console.Console("Hello?"))

// car.startTheCar()

// console.dir("Oh no!")

// console.Console()