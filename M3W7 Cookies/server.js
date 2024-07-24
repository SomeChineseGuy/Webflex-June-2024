const express = require('express');
const app = express()
const cookieParser = require('cookie-parser')
const PORT = 8000;


const langauge = require('./languages.json')

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true})) // this lets req.body to populate
app.use(cookieParser());

// Users to be login
// Users DB
const users = {
  abc: {
    id: "abc",
    email: "a@a.com",
    password: "123"
  }, 
  def: {
    id: "def",
    email: "b@b.com",
    password: "123"
  }
}

// Generate Random Id
function randomString(length, chars) {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

app.get('/', (req, res) => {
  const lang = req.cookies.lang;

  const arr = [] || "";
  if (!!arr) {
    
  }
  const templateVars = {
    heading: langauge.homeHeadings[lang] || langauge.homeHeadings.en,
    body: langauge.homeBodies[lang] || langauge.homeBodies.en
  }
  res.render('home', templateVars)
})

app.get('/about', (req, res) => {
  const lang = req.cookies.lang;
  if(!lang) {
    return res.redirect('/')
  }
  const templateVars = {
    head: langauge.aboutHeadings[lang],
    body: langauge.aboutBodies[lang]
  }
  res.render('about', templateVars)
})


// Or means "This comes first " || "Use this instead"
// || 
// &&

app.get('/langauges/:userLang', (req, res) => {
  const lang = req.params.userLang
  res.cookie('lang', lang);
  res.redirect('/')
})

app.post('/logout', (req, res) => {
  // Remove/clear the cookie with this ID
  res.clearCookie('userId')
  res.redirect('/')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', (req, res) => {
  const {email, password} = req.body;

  // Check to see if the user matches something in the DB
  let foundUser = null;
  for(let user in users) {
    if(users[user].email === email && users[user].password === password) {
      foundUser = users[user]
    }
  }

  // incorrect 
  if(!foundUser) {
    return res.send("Your email or password does no match")
  }

  // Correct path
  if(foundUser) {
    // Set the cookie
    res.cookie('userId', foundUser.id)
    return res.redirect('/')
  }
})

app.get('/register', (req, res) => {
  res.render('register')
})

app.post('/register', (req, res) => {
  // const email = req.body.email;
  // const password = req.body.password;
  const {email, password} = req.body;

  // Checking for email in DB
  for(let user in users) {
    if(users[user].email === email) {
      res.send("Email is already in use")
    }
  }

  const id = randomString(3, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

  const newUser = {
    id,
    email,
    password
  }

  users[id] = newUser;

  res.redirect('/')
})

app.get('/protected', (req, res) => {
  // Only login users can see this page
  // Check if there is a cookie
  // req.body === get typed in data
  // req.params === get URL data
  // req.cookies == get cookies
  console.log(req.cookies.userId);
  const user = req.cookies.userId;
  if(!user) {
    return res.redirect('/')
  }

  const templateVars = {
    user: users[user]
  }
  res.render('protected', templateVars)
})

app.listen(PORT, ( ) => {
  console.log(`The app is listening on port ${PORT}`);
})
