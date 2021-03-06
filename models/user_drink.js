const db = require('../db/db')

const UserDrinks = {
  create(userId, flavour, mixins_1, mixins_2, sugar_level, ice_level) {
    sql = `
      INSERT INTO users_drinks(userId, flavour, mixins_1, mixins_2, sugar_level, ice_level)
      VALUES($1, $2, $3, $4, $5, $6)
    `
    return db.query(sql, [userId, flavour, mixins_1, mixins_2, sugar_level, ice_level])
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

  updateUserDrinks(flavour, mixins_1, mixins_2, sugar_level, ice_level, id) {
    const sql = `
      UPDATE users_drinks
      SET flavour = $1,
          mixins_1 = $2,
          mixins_2 = $3,
          sugar_level = $4,
          ice_level = $5
      WHERE id = $6
    `

    return db.query(sql, [flavour, mixins_1, mixins_2, sugar_level, ice_level, id])
      .then(dbResponse => {
        return dbResponse.rows[0]
      })
  },

  updateDrinkCounter(count, id) {
    const sql = `
      UPDATE users_drinks
      SET counter = $1
      WHERE id = $2
    `

    return db.query(sql, [count, id])
      .then(dbResponse => {
        return dbResponse.rows[0]
      })
  },

  deleteDrink(id) {
    const sql = `
      DELETE FROM users_drinks
      WHERE id = $1
    `
    return db.query(sql, [id])
      .then(() => {
        return "Drink Deleted Successfully"
      })
  }
}
module.exports = UserDrinks