const express = require('express')
const router = express.Router()
const validateUser = require('../middlewares/user_validator/validate_user')
const User = require('../models/user')

router.post('/', validateUser, (req, res) => {
  const { username, email, password } = req.body

  User.findByEmail(email)
    .then(user => {
      if (user === undefined) {
        User.create(username, email, password)
          .then(successResponse => {
            res.json(successResponse)
          })
          .catch(err => {
            res.json(err.response.data.error)
          })
      } else {
        res.json({ error: "An account has been made with this email" })
      }
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