const db = require('../db/db')

const Drink = {
  allDrinkData() {
    const sql = `
      SELECT * FROM bubble_tea_data
    `
    return db.query(sql)
      .then(dbRes => dbRes.rows)
  }
}

module.exports = Drink