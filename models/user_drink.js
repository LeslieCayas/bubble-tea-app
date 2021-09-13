const db = require('../db/db')

const UserDrinks = {
  create(userId, drink, mixins_1, mixins_2, sugar_level, ice_level) {
    sql = `
      INSERT INTO users_drinks(userId, drink, mixins_1, mixins_2, sugar_level, ice_level)
      VALUES($1, $2, $3, $4, $5, $6)
    `
    return db.query(sql, [userId, drink, mixins_1, mixins_2, sugar_level, ice_level])
      .then(dbResponse => {
        return dbResponse.rows[0]
      })
  },

  findDrinksByUser(userId) {
    const sql = `
      SELECT * FROM users_drinks
      WHERE userId = $1
    `

    return db.query(sql, [userId])
      .then(dbResponse => {
        return dbResponse.rows
      })
  }

}
module.exports = UserDrinks