const validatePassword = require('./validate_password')
const validationError = require('../validation_error')

function validateUser(req, res, next) {
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password

  if (username === '' || username === undefined || username === null) {
    throw validationError("Username is required")
  }
  else if (email === '' || email === undefined || email === null) {
    throw validationError("Email is required")
  }
  else if (password === '' || password === undefined || password === null) {
    throw validationError("Password is required")
  }

  validatePassword(password)

  next()
}

module.exports = validateUser;
