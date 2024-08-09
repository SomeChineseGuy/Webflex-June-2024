const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8001;
const cors = require('cors');
const { resourceLimits } = require('worker_threads');


// middleware
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(cors());

// data
const dogs = [
  {
    id: 'abc',
    name: 'Dioji',
    breed: 'german shepherd',
    weight: 100
  },
  {
    id: 'def',
    name: 'Clifford',
    breed: 'big and red',
    weight: 1000
  },
  {
    id: 'ghi',
    name: 'Rusty',
    breed: 'cross labradour and german shepard',
    weight: 60
  },
];

app.get('/api/dogs', (req, res) => {
  // make a DB request
  res.json(dogs)
})

app.post('/dogs', (req, res) => {
  const id = Math.random();
  const dogData = {...req.body, id}
  dogs.push(dogData);
  console.log(dogData);
  res.json(dogs)
})


app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});