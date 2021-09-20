const express = require('express')
const router = express.Router()
const UserDrink = require('../models/user_drink')
const validateDrink = require('../middlewares/validate_drink') 
router.get('/', (req, res) => {
  // replace userId with sessions userId

  const { userId } = req.session

  UserDrink.findDrinksByUser(userId)
    .then(userDrinks => {
      res.json(userDrinks)
    })
})

router.post('/', validateDrink, (req, res) => {
  // replace userId with sessions userId
  const { userId } = req.session
  const { flavour, mixins_1, mixins_2, sugar_level, ice_level } = req.body
  UserDrink.create(userId, flavour, mixins_1, mixins_2, sugar_level, ice_level)
    .then(userDrink => {
      res.json(userDrink)
    })
})

router.patch('/', (req, res) => {
  // update counter with state?
  const { drink, mixins_1, mixins_2, sugar_level, ice_level, counter, id} = req.body
  UserDrink.updateUserDrinks(drink, mixins_1, mixins_2, sugar_level, ice_level, counter, id)
    .then(updatedInfo => {
      res.json(updatedInfo)
    })
})


module.exports = router