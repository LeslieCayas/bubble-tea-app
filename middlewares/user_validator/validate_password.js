const validationError = require('../validation_error')

function validatePassword(password) {
  if (password.length < 8) {
    throw validationError("Password must be at least 8 characters")
  }
  if (!(/[a-z]/.test(password))) {
    throw validationError("Password must contain 1 lowercase letter")
  }
  if (!(/[A-Z]/.test(password))) {
    throw validationError("Password must contain 1 uppercase letter")
  }
  if (!(/[0-9]/.test(password))) {
    throw validationError("Password must contain 1 numeric letter")
  }
  if (!(/[^\w\s\d]/.test(password))) {
    throw validationError("Password must contain 1 non alpha-numeric letter")
  }
}
module.exports = validatePassword