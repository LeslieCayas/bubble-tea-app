require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 3001
const app = express()
const path = require('path')
const session = require('express-session')

const errorHandler = require('./middlewares/error_handler')
const drinksController = require('./controllers/drinks_controller')
const userDrinksController = require('./controllers/user_drinks_controller')
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/session_controller')

const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  saveUninitialized: false,
  resave: false,
}

if (process.env.NODE_ENV === 'production') {
  sessionConfig.cookie.secure = true
  app.set('trust proxy', 1)
}

app.use(session(sessionConfig));
app.use(express.json())
app.use(express.static('./client/build'))
app.listen(port, () => console.log(`server listening on port: ${port}`));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})
// app.get('/api/test', (req, res) => {
//   res.send({ set: "true" })
// })

// app.use(express.static('client'))
app.use('/api/sessions', sessionsController)
app.use('/api/users', usersController)
app.use('/api/drinks', drinksController)
app.use('/api/userDrinks', userDrinksController)
app.use(errorHandler)