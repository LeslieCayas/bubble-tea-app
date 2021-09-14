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
    throw validationError("Name is required");
  }
  else if (email === '' || email === undefined || email === null) {
    throw validationError("Email is required");
  }
  else if (password === '' || password === undefined || password === null) {
    throw validationError("Password is required");
  }
  else if (password.length < 3) {
    throw validationError("Password must be at least 3 characters");
  }

  next();
}

module.exports = validateUser;
