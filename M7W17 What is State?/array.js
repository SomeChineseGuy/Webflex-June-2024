// Filter
const arr = [
  {username: 'JOE', id: 10},
  {username: 'Steve', id: 14},
  {username: 'Ryan', id: 25},
  {username: 'Linda', id: 99}
]

// Filter
// const filteredArr = arr.filter((item, idx) => {
//   console.log(item.id);
//   // if(item.id > 20) {
//   //   return item;
//   // }
//   return item.id > 20
// })

const filteredArr = arr.filter((item) => item.id > 20);

console.log(filteredArr);