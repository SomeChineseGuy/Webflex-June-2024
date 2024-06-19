// c -style 
// for (let i = 0; i < 100; i++) {....}


// for.. of only works for ARRAYS


const arr = [10,20,30];



// for(let num of arr) {
//   console.log(num);
// }

// // for.. in can loop array to get the position and can loop Objs
// for(let num in arr) {
//   // arr[0]
//   // arr[1]
//   // arr[2]
//   console.lo00g(arr[num]);
// }


const obj = {
  name: "Alvin",
  isGrad: true,
  num: 10,
  favFood: "Sushi",
  arr: [1,2,3],
  anotherObj: {
    item1: "Bread",
    item2: "Ham"
  }
}

// for(let key in obj) {
//   if (Array.isArray(obj[key])) {
//     for (let num of obj[key]) {
//       console.log(num);
//     }
//   } else {
//     console.log(obj[key]);
//   }
// }

// for(let key of obj) {
//   console.log(key);
//   // obj.name
//   // obj.isGrad
//   // console.log(obj.key);/
//   // console.log(`key: ${key} - value: ${obj[key]}`);
// }

const isItRaining = function(weather) {
  if(weather === 'rainning') {
    return {
      something: "Something",
      age: 10000,
      isGrad: true
    }
  }
  return 'Go outside'
  

  //  return weather === 'rainning' ? 'Stay Inside' : "Go outside"
}

console.log(isItRaining('rainning'));
console.log(isItRaining('snowing'));