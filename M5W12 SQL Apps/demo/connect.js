const { Client, Pool } = require('pg');

const config = {
  user: 'alvinng',
  host: 'localhost',
  database: 'intro',
  port: 5432,
  password: 'alvinng'
}

const pool = new Pool(config);

// pool.query('SELECT * FROM pets;')
//   .then((res) => {
//     console.log(res.rows);
//   })

const getAll = (item) => {
  return pool.query(`SELECT * FROM ${item};`)
    .then((res) => {
      return res.rows;
    })
    .catch(err => {
      console.log(err);
    })
}

// getAll('users')
getAll('pets').then(res => {
  console.log(res);
})