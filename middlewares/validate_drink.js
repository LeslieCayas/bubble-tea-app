const validationError = require('./validation_error')
const fs = require('fs')
const fileString = fs.readFileSync('/home/lesliec/Desktop/Sei/project4/bubble-tea-app/db/drinkData/BubbleTeaData.csv', 'utf-8')

function drinkFlavours() {
  // if any fields are empty throw error
  // if
  const lines = fileString.split('\n')
  const drinkFlavours = lines.map(line => {
    const trimmedData = line.split('\r').join('')
    const drinkData = trimmedData.split(",")
    const flavour = drinkData[0]
    return flavour
  })

  return drinkFlavours
}

function getAllMixins() {
  const fileString = fs.readFileSync('/home/lesliec/Desktop/Sei/project4/bubble-tea-app/db/mixinsData/MixinsData.csv', 'utf-8')
  const lines = fileString.split('\n')
  const allMixins = lines.map(line => {
    const trimmedData = line.split('\r').join('')
    const mixinData = trimmedData.split(",")
    const mixin = mixinData[0]
    return mixin
  })
  const validMixins = [...allMixins, "none"]

  return validMixins
}

function validateDrink(req, res, next) {
  const allDrinkFlavours = drinkFlavours()
  const allMixins = getAllMixins()
  const allSugarLevels = ["0%", "30%", "50%", "80%", "100%"]
  const allIceLevels = ["0%", "50%", "100%"]

  const { flavour, mixins_1, mixins_2, sugar_level, ice_level } = req.body

  const foundFlavour = allDrinkFlavours.find(drink => drink.flavour === flavour)
  const foundMixins = allMixins.find(mixin => mixin.mixin === mixins_1 || mixins_2)
  const foundSugarLevel = allSugarLevels.find(level => level === sugar_level)
  const foundIceLevel = allIceLevels.find(level => level === ice_level)

  if (foundFlavour === undefined) {
    throw validationError("Invalid Drink Input")
  }

  if (foundMixins.length < 2 || foundMixins.length === undefined) {
    throw validationError("Invalid Mixin Input")
  }

  if (foundSugarLevel.length === undefined) {
    throw validationError("Invalid Sugar Level Input")
  }

  if (foundIceLevel.length === undefined) {
    throw validationError("Invalid Ice Level Input")
  }

  next()
}

module.exports = validateDrink