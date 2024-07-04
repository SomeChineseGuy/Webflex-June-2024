const fs = require('fs');

fs.readFile('./data1.txt', {encoding: 'utf-8'} , (err, data) => {
  if(err) {
    console.log(err);
    throw Error;
  }
  console.log(data);
  fs.readFile('./data2.txt', {encoding: 'utf-8'} , (err, data) => {
    if(err) {
      console.log(err);
      throw Error;
    }
    console.log(data);
    fs.readFile('./data3.txt', {encoding: 'utf-8'} , (err, data) => {
      if(err) {
        console.log(err);
        throw Error;
      }
      console.log(data);
      fs.readFile('./data3.txt', {encoding: 'utf-8'} , (err, data) => {
        if(err) {
          console.log(err);
          throw Error;
        }
        console.log(data);
        fs.readFile('./data3.txt', {encoding: 'utf-8'} , (err, data) => {
          if(err) {
            console.log(err);
            throw Error;
          }
          console.log(data);
          fs.readFile('./data3.txt', {encoding: 'utf-8'} , (err, data) => {
            if(err) {
              console.log(err);
              throw Error;
            }
            console.log(data);
          })
        })
      })
    })
  })
})







