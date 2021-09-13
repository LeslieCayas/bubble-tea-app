const express = require('express')
const router = express.Router()
const UserDrink = require('../models/user_drink')

router.get('/', (req, res) => {
  const {userId} = req.body

  UserDrink.findDrinksByUser(userId)
    .then(userDrinks => {
      res.json(userDrinks)
    })
})

router.post('/', (req, res) => {
  // replace userId with sessions userId
  const {userId, drink, mixins_1, mixins_2, sugar_level, ice_level} = req.body
  UserDrink.create(userId, drink, mixins_1, mixins_2, sugar_level, ice_level)
    .then(userDrink => {
      res.json(userDrink)
    })
})
module.exports = router