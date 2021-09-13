const express = require('express')
const router = express.Router()
const UserDrinks = require('../models/user_drink')

router.post('/', (req, res) => {
  const {userId, drink, mixins_1, mixins_2, sugar_level, ice_level} = req.body
  UserDrinks.create(userId, drink, mixins_1, mixins_2, sugar_level, ice_level)
    .then(userDrink => {
      res.json(userDrink)
    })
})
module.exports = router