const bodyParser	= require('body-parser');
const express			= require('express');
const morgan			= require('morgan');
const {Pool}      = require('pg');
const app = express();
const PORT = 8080;

const pool = new Pool({
  user: 'alvinng',
  host: 'localhost',
  password: 'alvinng',
  database: 'intro',
  port: 5432
});


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))
app.use(morgan('dev'));
app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
	res.send('ok');
})


app.get('/', (req, res) => {
	const query = req.query.query;
	templateVars = {resp: null}
	res.render('home', templateVars);
})

app.post('/query', (req, res) => {
	const name = req.body.query;
	const species = req.body.species;
	console.log(name, species);

	pool.query(`SELECT * FROM pets where name like $1 and species = $2;`, [`%${name}%`, species])
	.then((resp) => {
		const templateVars = {resp}
		res.render('home', templateVars);
	})
})

app.post('/add/pets', (req, res) => {
	const { name, species, breed, sex, user_id, age } = req.body;
	pool.query(`INSERT INTO pets(name, species, breed, sex, user_id, age) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;`, [name, species, breed, sex, user_id, age])
	.then((resp) => {
		const templateVars = {resp};
		res.render('home', templateVars)
	}).catch(err => {
		console.log(err);
	})
})

app.get('/api/users', (req, res) => {
	console.log('This fires in the back');
	pool.query('SELECT * FROM users;')
	.then(resp => {
		// console.log(resp.rows);
		res.send(resp.rows)
	}).catch(err => {
		console.log(err);
	})
})

app.post('/delete/pets', (req, res) => {
	const name = req.body.name;
	pool.query('DELETE FROM pets WHERE name = $1;', [name])
	.then((resp) => {
		console.log(resp);
		res.redirect('/')
	}).catch(err => {
		console.log(err);
	})
})


app.listen(PORT, () => console.log("Server is listening on:", PORT));