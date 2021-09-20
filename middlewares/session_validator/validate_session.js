const validationError = require('./validation_error')
const bcryptjs = require('bcryptjs')

function validateUser(req, res, next) {
  const email = req.body.email
  const password = req.body.password

  if (email === '' || email === undefined || email === null) {
    throw validationError("Email is required")
  }
  else if (password === '' || password === undefined || password === null) {
    throw validationError("Password is required")
  }

  next()
}

module.exports = validateUser;
