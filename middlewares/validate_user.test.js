const validateUser = require('./validate_user')

const res = {}

const next = () => {
  console.log("next called")
  done()
}

test('blank entries', () => {
  const req = {
    body: {
      username: "",
      email: "test",
      password: "test"
    }
  }
  expect(() => {
    validateUser(req, res, next)
  }).toThrow("Username is required")
})

test('short password', () => {
  const req = {
    body: {
      username: "test",
      email: "test",
      password: "te"
    }
  }
  expect(() => {
    validateUser(req, res, next)
  }).toThrow("Password must be at least 8 characters")
})

test('no non-alphanumeric password', () => {
  const req = {
    body: {
      username: "test",
      email: "test",
      password: "eS1SSSSS"
    }
  }
  expect(() => {
    validateUser(req, res, next)
  }).toThrow("Password must contain 1 non alpha-numeric letter")
})

test('no number in password', () => {
  const req = {
    body: {
      username: "test",
      email: "test",
      password: "eS&SSSSS"
    }
  }
  expect(() => {
    validateUser(req, res, next)
  }).toThrow("Password must contain 1 numeric letter")
})

test('no lowercase letter in password', () => {
  const req = {
    body: {
      username: "test",
      email: "test",
      password: "SS&SSSSS"
    }
  }
  expect(() => {
    validateUser(req, res, next)
  }).toThrow("Password must contain 1 lowercase letter")
})

test('no upcase letter in password', () => {
  const req = {
    body: {
      username: "test",
      email: "test",
      password: "ss&sssss"
    }
  }
  expect(() => {
    validateUser(req, res, next)
  }).toThrow("Password must contain 1 uppercase letter")
})