const { Pool } = require('pg')

let db;
if (process.env.NODE_ENV === 'production') {
  db = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false 
    }
  })
} else {
  db = new Pool({
    database: 'bubble_tea_app',
    password: process.env.DB_PASSWORD
  })
}

module.exports = db
