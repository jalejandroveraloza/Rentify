const express = require("express");
const router = express.Router();
const db = require('./db');

// GET /shopping_cart
module.exports = (db) => {

router.get('/shopping_cart', async (req, res) => {
  try {
    const shoppingCart = await db.query('SELECT * FROM shopping_cart');
    res.json(shoppingCart.rows);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
})};

// POST /shopping_cart
module.exports = (db) => {

router.post('/shopping_cart', async (req, res) => {
  const { user_id, product_id, quantity } = req.body;
  try {
    const newCartItem = await db.query('INSERT INTO shopping_cart (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *', [user_id, product_id, quantity]);
    res.json(newCartItem.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
})};

module.exports = router;