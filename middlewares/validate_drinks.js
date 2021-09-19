const validationError = require('./validation_error')
const fs = require('fs')
const { allMixins } = require('../models/mixins')

function drinkFlavours() {
  // if any fields are empty throw error
  // if
  const fileString = fs.readFileSync('../db/drinkData/BubbleTeaData.csv', 'utf-8')
  const lines = fileString.split('\n')
  const drinkFlavours = lines.map(line => {
    const trimmedData = line.split('\r').join('')
    const drinkData = trimmedData.split(",")
    const flavour = drinkData[0]
    return flavour
  })

  return drinkFlavours
}

function allMixins() {
  const fileString = fs.readFileSync('../db/mixinsData/MixinsData.csv', 'utf-8')
  const lines = fileString.split('\n')
  const allMixins = lines.map(line => {
    const trimmedData = line.split('\r').join('')
    const mixinData = trimmedData.split(",")
    const mixin = mixinData[0]
    return mixin
  })
  return allMixins
}

function validateDrink() {
  const drinkFlavours = drinkFlavours()
  const allMixins = allMixins()
  const {flavour, mixins_1, mixins_2, sugar_level, ice_level} = req.body
  
}

console.log(drinkFlavours())