console.log('First');

const setTimeoutReturn = setTimeout(() => {
  console.log("Set Time out!")
}, 10000)

for(let i = 0; i < 1000000; i++) {
  const date = new Date();
  console.log(date);
}

console.log('Last');