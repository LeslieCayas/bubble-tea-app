require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 3001
const app = express()
const path = require('path')
const session = require('express-session')

const errorHandler = require('./middlewares/error_handler')
const drinksController = require('./controllers/drinks_controller')
const mixinsController = require('./controllers/mixins_controller')
const userDrinksController = require('./controllers/user_drinks_controller')
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/session_controller')
// const storeController = require('./controllers/stores_controller')

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
app.listen(port, () => console.log(`server listening on port: ${port}`));
app.use(express.static('./client/build'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})
// app.get('/api/test', (req, res) => {
//   res.send({ set: "true" })
// })

app.use('/api/sessions', sessionsController)
// app.use('/api/stores', storesController)
app.use('/api/users', usersController)
app.use('/api/drinks', drinksController)
app.use('/api/mixins', mixinsController)
app.use('/api/userDrinks', userDrinksController)

app.use(errorHandler)
console.log(process.env.HERE_MAPS_KEY)