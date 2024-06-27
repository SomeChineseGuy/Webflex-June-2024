// This funciton is to say Hello to whatever name you place in here
const sayhello = (name) => {
  
  return `Hello there ${name}`
}

// console.log(arguments);

const newName = "John"

// console.log(sayhello());

// actual vs expected
// module.exports = sayhello;
// module.exports = [sayhello, newName];
// module.exports.sayhello = sayhello;
// module.exports.newName = newName;

// Javascript started in the browser
// JS is not part of your OS at the start
// Your computer will run C++
// How does node work?
// Google invented Node which is a systems level Language that is in JS but Runs C++

console.log("Something is cool")

module.exports = {
  sayhello,
  newName
}
