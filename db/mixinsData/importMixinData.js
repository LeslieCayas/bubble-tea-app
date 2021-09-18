require('dotenv').config({path: __dirname+'/../../.env'})
const fs = require('fs')
const db = require('../db')


const fileString = fs.readFileSync('./MixinsData.csv', 'utf-8')
const lines = fileString.split('\n')
// console.log(lines)


function importMixinData(lines) {
  lines.forEach(line => {
    const trimmedData = line.split('\r').join('')
    const drinkData = trimmedData.split(",")
    const mixin = drinkData[0]
    const kj = drinkData[1]

    sql = `INSERT INTO mixins_data(
      mixin, kilojoules
    )
    VALUES (
      $1, $2
    )`

    db.query(sql, [mixin, kj])
  })

}

importMixinData(lines)