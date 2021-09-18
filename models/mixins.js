const db = require('../db/db')

const Mixins = {
  allMixins() {
    const sql = `
      SELECT * FROM mixins_data
    `
    return db.query(sql)
      .then(dbRes => dbRes.rows)
  }
}

module.exports = Mixins