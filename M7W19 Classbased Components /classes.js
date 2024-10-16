function sayHello() {}
const sayHello2 = () => {}

class Box {
  // A class is a mix of an object and a function
  // Make the classes blueprint
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  // const area = () => {}
  area() {
    return this.length + this.width;
  }

  boxLength() {
    return `The length is ${this.length}`
  }
}

const myBox = new Box(2, 5);

// console.log(myBox);
// console.log(myBox.area());
// console.log(myBox.boxLength());

class Prism extends Box {
  constructor(length, width, height) {
    super(length, width) // super is how you call the parent's constructor
    this.height = height

    this.volume = this.volume.bind(this)
  }

  volume() {
    console.log('this', this);
    // return this.width * this.length * this.height;
  }

}

const myPrism = new Prism(5,10,9)
// console.log(myPrism);
console.log(myPrism.volume());

// const myPrism2 = new Prism(2,2,2)
// console.log(myPrism2.volume());
// console.log(myPrism.boxLength());
// console.log(myPrism.volume());

const volume = myPrism.volume
console.log(volume());

// const log = console.log;
// log('hello')