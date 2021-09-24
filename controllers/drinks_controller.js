const express = require('express')
const router = express.Router()
const Drink = require('../models/drink')

router.get('/', (req, res) => {
  Drink.allDrinkData()
    .then(drinks => res.json(drinks))
})

module.exports = router