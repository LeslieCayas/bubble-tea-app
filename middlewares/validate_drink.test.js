const validateDrink = require('./validate_drink')


const res = {}

const next = () => {
  console.log("next called")
  done()
}

test('Invalid Flavour', () => {
  const req = {
    body: {
      flavour: "Orange Juice",
      mixins_1: "Pearls",
      mixins_2: "Aloe Vera",
      sugar_level: "50%",
      ice_level: "50%"
    }
  }
  expect(() => {
    validateDrink(req, res, next)
  }).toThrow("Invalid Drink Input")
})

