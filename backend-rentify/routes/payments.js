const express = require("express");
const router = express.Router();
const db = require('./db');

// GET /payments
module.exports = (db) => {

router.get('/payments', async (req, res) => {
  try {
    const payments = await db.query('SELECT * FROM payments');
    res.json(payments.rows);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
})};

// POST /payments
module.exports = (db) => {

router.post('/payments', async (req, res) => {
  const { user_id, amount, date } = req.body;
  try {
    const newPayment = await db.query('INSERT INTO payments (user_id, amount, date) VALUES ($1, $2, $3) RETURNING *', [user_id, amount, date]);
    res.json(newPayment.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
})};

module.exports = router;