const Pool = require("pg").Pool


const pool = new Pool({
  user: "postgres",
  password: "12345",
  host: "localhost",
  port: 5000,
  database: "rentify"
});

module.exports = pool;