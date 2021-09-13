const express = require('express')
const router = express.Router()
const Drink = require('../models/drink')

// find drinks by store?
// group drinks based on flavour, store, kj
router.get('/', (req,res) => {
  Drink.allDrinkData()
    .then(drinks => res.json(drinks))
})

module.exports = router