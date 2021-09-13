require('dotenv').config()
const express = require('express');
const port = process.env.PORT || 3001;
const app = express();
const path = require('path');
const drinksController = require('./controllers/drinks_controller')

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
app.use('/api/drinks', drinksController)