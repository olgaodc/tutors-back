require("dotenv").config();
const { Pool } =  require('pg');
const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: true,
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DB_PORT,
  database: process.env.DB,
});

module.exports = pool