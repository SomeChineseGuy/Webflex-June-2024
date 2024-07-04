let numIntervals = 1;

console.log('First');

const intervalRuns =  setInterval(() => {
  console.log(numIntervals + ' times this has ran');
  numIntervals ++
  if(numIntervals === 7) {
    clearInterval(intervalRuns)
  }
}, 500)

console.log('last');

for(let i = 0; i < 1000; i++ ) {
  const date = new Date()
  console.log(date);
}


