const express = require("express");
const app = express();
const pool = require("../db");

// GET /payments

app.get('/payments', async (req, res) => {
  try {
    const payments = await pool.query('SELECT * FROM payments');
    res.json(payments.rows);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// POST /payments

app.post('/payments', async (req, res) => {
  const { user_id, amount, date } = req.body;
  try {
    const newPayment = await pool.query('INSERT INTO payments (user_id, amount, date) VALUES ($1, $2, $3) RETURNING *', [user_id, amount, date]);
    res.json(newPayment.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

