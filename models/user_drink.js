const db = require('../db/db')

const UserDrinks = {
  create(userId, drink, mixins_1, mixins_2, sugar_level, ice_level) {
    sql = `
      INSERT INTO users_drinks(userId, drink, mixins_1, mixins_2, sugar_level, ice_level)
      VALUES($1, $2, $3, $4, $5, $6)
    `
    return db.query(sql, [userId, drink, mixins_1, mixins_2, sugar_level, ice_level])
      .then(() => {
        return "Drink Created Successfully"
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
  },

  updateUserDrinks(drink, mixins_1, mixins_2, sugar_level, ice_level, counter, id) {
    const sql = `
      UPDATE users_drinks
      SET drink = $1,
          mixins_1 = $2,
          mixins_2 = $3,
          sugar_level = $4,
          ice_level = $5,
          counter = $6
      WHERE id = $7
    `

    return db.query(sql, [drink, mixins_1, mixins_2, sugar_level, ice_level, counter, id])
      .then(dbResponse => {
        return dbResponse.rows[0]
      })
  },

  updateDrinkCounter(counter, id) {
    const sql = `
      UPDATE users_drinks
      SET counter = $1
      WHERE id = $2
    `

    return db.query(sql, [counter, id])
    .then(dbResponse => {
      return dbResponse.rows[0]
    })
  }
}
module.exports = UserDrinks