const express = require('express')
const router = express.Router()
const UserDrink = require('../models/user_drink')
const validateDrink = require('../middlewares/drink_validator/validate_drink')
router.get('/', (req, res) => {
  // replace userId with sessions userId

  const { userId } = req.session

  UserDrink.findDrinksByUser(userId)
    .then(response => {
      res.json(response)
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

router.patch('/:id', (req, res) => {
  // update counter with state?
  const { flavour, mixins_1, mixins_2, sugar_level, ice_level, counter } = req.body
  const { id } = req.params
  UserDrink.updateUserDrinks(flavour, mixins_1, mixins_2, sugar_level, ice_level, counter, id)
    .then(updatedInfo => {
      res.json(updatedInfo)
    })
})

router.delete('/', (req, res) => {
  const {id} = req.params

  UserDrink.deleteDrink(id)
    .then(response => {
      res.json(response)
    })
})


module.exports = router