const arr = [1,2,3,4,5]

// C style loop
for(let i = 0; i < 100; i++) {

}

// For of
for(let item of arr) {
  return item
}

// For in
for(let item in arr) {

}


// Array.map()
// Map creates a new array
// Keep the old one the same
// Always remember map has to RETURN something
const newArr = arr.map((item, idx) => {
  return item * 2
})
// console.log(arr);
// console.log(newArr);


// Array.forEach()
// For each is basic a for of
// in For Each we DO NOT return anything
arr.forEach((item, idx) => {
  console.log(item, idx);
  return item;
})

const myFunc = () => {
  return <p>Hello</p>
}

console.log(myFunc()); 