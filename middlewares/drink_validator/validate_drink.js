const validationError = require('./validation_error')
const fs = require('fs')
const path = require('path')

function drinkFlavours() {
  const fileString = fs.readFileSync(path.resolve(__dirname, "../db/drinkData/BubbleTeaData.csv"), "utf-8")
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
  const fileString = fs.readFileSync(path.resolve(__dirname, "../db/mixinsData/MixinsData.csv"), "utf-8")
  const lines = fileString.split('\n')
  const allMixins = lines.map(line => {
    const trimmedData = line.split('\r').join('')
    const mixinData = trimmedData.split(",")
    const mixin = mixinData[0]
    return mixin
  })
  const validMixins = [...allMixins, "None"]

  return validMixins
}

function validateDrink(req, res, next) {
  const allDrinkFlavours = drinkFlavours()
  const allMixins = getAllMixins()
  const allSugarLevels = ["0%", "30%", "50%", "80%", "100%"]
  const allIceLevels = ["0%", "50%", "100%"]

  const { flavour, mixins_1, mixins_2, sugar_level, ice_level } = req.body
  const { userId } = req.session
  const foundFlavour = allDrinkFlavours.find(drink => drink === flavour)
  const foundMixins1 = allMixins.find(mixin => mixin === mixins_1)
  const foundMixins2 = allMixins.find(mixin => mixin === mixins_2)
  const foundSugarLevel = allSugarLevels.find(level => level === sugar_level)
  const foundIceLevel = allIceLevels.find(level => level === ice_level)
  
  if (foundFlavour === undefined) {
    throw validationError("Invalid Drink Input")

  } else if (foundMixins1 === undefined) {
    throw validationError("Invalid Mixin Input")

  } else if (foundMixins2 === undefined) {
    throw validationError("Invalid Mixin Input")

  } else if (foundSugarLevel === undefined) {
    throw validationError("Invalid Sugar Level Input")

  } else if (foundIceLevel === undefined) {
    throw validationError("Invalid Ice Level Input")

  } else if (!userId) {
    throw validationError("Please Log In or Sign Up")
  }

  next()
}

module.exports = validateDrink

// console.log(getAllMixins())