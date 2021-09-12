require('dotenv').config({path: __dirname+'/../.env'})
const fs = require('fs')
const db = require('./db')


const fileString = fs.readFileSync('./BubbleTeaData.csv', 'utf-8')
const lines = fileString.split('\n')
// console.log(lines)


function importTeaData(lines) {
  lines.forEach(line => {
    const trimmedData = line.split('\r').join('')
    const drinkData = trimmedData.split(",")
    const flavour = drinkData[0]
    const store = drinkData[1]
    const kj = drinkData[2]

    sql = `INSERT INTO bubble_tea_data(
      flavour, store, kilojoules
    )
    VALUES (
      $1, $2, $3
    )`

    db.query(sql, [flavour, store, kj])
  })

}

importTeaData(lines)