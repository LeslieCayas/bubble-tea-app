const express = require('express')
const router = express.Router()
const validateUser = require('../middlewares/validate_user')
const User = require('../models/user')

router.post('/', validateUser, (req, res) => {
  const { username, email, password } = req.body
  User.create(username, email, password)
    .then(successResponse => {
      res.json(successResponse)
    })
})

router.get('/', (req, res) => {
  const { email } = req.body
  User.findByEmail(email)
    .then(userInfo => {
      res.json(userInfo)
    })
})

module.exports = router