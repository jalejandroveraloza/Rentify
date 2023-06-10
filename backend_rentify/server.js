const Pool = require("pg").Pool
const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();

//middleware

app.use(cors());
app.use(express.json());


const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  port: 5432,
  database: "rentify"
});

app.get('/api/users', (req, res) => {
  // Query the database to fetch data
  pool.query('SELECT * FROM customers', (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      // Send the fetched data as a response
      res.json(result.rows);
    }
  });
})

app.listen(5000, () => {
  console.log("server has started on port 5000");
});


module.exports = pool;