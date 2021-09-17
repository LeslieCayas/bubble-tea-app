const express = require('express')
const bcryptjs = require('bcryptjs')
const router = express.Router()
const User = require('../models/user')
const validateUser = require('../middlewares/validate_user')
const { createSession } = require('../helpers/session_helper')

router.post('/', (req, res) => {
  User.findByEmail(req.body.email)
    .then(user => {
      if (user && bcryptjs.compareSync(req.body.password, user.password_digest)) {
        createSession(req, user)
        res.json(req.session)
      } else {
        res.json({ error: "Incorrect email or password" });
      }
    })
})

router.delete('/', (req, res) => {
  req.session.destroy()
  res.json({})
})

module.exports = router