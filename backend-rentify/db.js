const { Pool } = require("pg");

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  port: 5432,
  database: "rentify",
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
