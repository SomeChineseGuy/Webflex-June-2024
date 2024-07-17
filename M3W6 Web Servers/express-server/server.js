const express = require('express');
const PORT = 8000;
const app = express();

// Set Our server to use EJS
app.set('view engine', 'ejs');

// Database
let num = 1;
const sum = (num1, num2) => {
  return num1 + num2
}
const catsDatabase = {
  one: 'https://i.kym-cdn.com/photos/images/newsfeed/001/394/314/c62.jpg' ,
  two: 'https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/smudge-the-viral-cat.jpg',
  three: 'https://www.idlememe.com/wp-content/uploads/2021/11/polite-cat-meme-idlememe-1-300x300.jpg',
  four: 'https://i.imgur.com/drvA0ew.jpg'
}

const usersDB = {
  user1: "Alvin",
  user2: "Stacy"
}

const arr = [1,2,3,4];
console.log(arr[2])

app.get('/', (request, response) => {
  
  response.send('<h1>Welcome to my page! </h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>Welcome to the About Page! </h1>')
})

app.get('/cats', (req, res) => {
  const templateVars = {
    catsDatabase,
    usersDB,
    arr,
    username: "alvin"
  }
  
  num ++
  res.render('cats', templateVars)
})


app.get('/api/cats', (req, res) => {
  res.send({
    cat1: {
      name: 'kittens',
      color: 'black and white'
    },
    cat2: {
      name: 'mittens',
      color: 'orange and white'
    }
  })
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
})