const db = require('../db/db')
const bcryptjs = require('bcryptjs')

const User = {
  create(username, email, password) {
    const password_digest = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10))

    const sql = `
      INSERT INTO users(username, email, password_digest)
      VALUES($1, $2, $3)
    `
    return db.query(sql, [username, email, password_digest])
      .then(() => {
        return "User Created Successfully"
      })
  },

  findByEmail(email) {
    const sql = `
      SELECT * FROM users
      WHERE email = $1
    `
    return db.query(sql, [email])
      .then(dbResponse => {
        return dbResponse.rows[0]
      })
  },

  findByName(id) {
    const sql = `
      SELECT username FROM users
      WHERE id = $1
    `
    return db.query(sql, [id])
      .then(dbResponse => {
        return dbResponse.rows[0]
      })
  }
}

module.exports = User