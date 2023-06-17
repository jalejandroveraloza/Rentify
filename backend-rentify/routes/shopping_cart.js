const express = require("express");
const app = express();
const pool = require("../db");

// GET /shopping_cart

app.get('/shopping_cart', async (req, res) => {
  try {
    const shoppingCart = await pool.query('SELECT * FROM shopping_cart');
    res.json(shoppingCart.rows);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// POST /shopping_cart

app.post('/shopping_cart', async (req, res) => {
  const { user_id, product_id, quantity } = req.body;
  try {
    const newCartItem = await pool.query('INSERT INTO shopping_cart (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *', [user_id, product_id, quantity]);
    res.json(newCartItem.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

