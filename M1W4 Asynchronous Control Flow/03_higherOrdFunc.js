// console.log('outside of the func 1');

// const higherOrderFunc = (callback) => {
//   console.log('Inside the func 3');
//   setTimeout(() => {
//     console.log('inside the setTimeout 2');
//   }, 0);
//   return callback()
// }

// console.log('after the func 4.');

// higherOrderFunc(() => {
//   console.log('inside the callback 5');
// })

let user = 'Alvin'

const higherOrderFunc = (callback) => {
  user = 'Joe'
  setTimeout(() => {
    user = 'Ryan'
    console.log('inside settimeout', user);
  }, 0);
  return callback()
}

higherOrderFunc(() => {
  user = 'Steve'
})

console.log(user);