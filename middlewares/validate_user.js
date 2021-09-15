function validationError(message) {
  const error = new Error(message);
  error.status = 422;
  return error;
}

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

  next();
}

module.exports = validateUser;
