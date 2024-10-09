

const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Mike', age: 35 }
];


// map
// forEach


// Array helpers that find something
// filter
// find
const mike = users.find((item) => {
  return item.name === "Mike"
});

const firstOver30 = users.find((item) => item.age >= 30)

console.log(mike);
console.log(firstOver30);

// some  - at least ONE item in the array meets this - return a boolean
// every - ALL items in the array meets this - return a boolean
const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some((item) => item % 2 === 0);
console.log(hasEvenNumber);
const everyNumberIsEven = numbers.every((item) => item % 2 === 0);
console.log(everyNumberIsEven);

// Reduce
// Takes an array and reduces it down to one value
const sumOfArr = numbers.reduce((acc, item) => {
  acc += item
  return acc
}, 0);

console.log(sumOfArr);

const obj = {};
for(let items of numbers) {
  obj[items] = items
}

console.log(obj);

const newObj = numbers.reduce((acc, item) => {
  acc[item] = item
  return acc
}, {})

console.log(newObj);