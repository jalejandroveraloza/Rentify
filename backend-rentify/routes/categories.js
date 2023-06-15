const express = require("express");
const router = express.Router();
const db = require('./db');

// GET /categories
module.exports = (db) => {

router.get('/categories', async (req, res) => {
  try {
    const categories = await db.query('SELECT * FROM categories');
    res.json(categories.rows);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
})};

// POST /categories
module.exports = (db) => {

router.post('/categories', async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = await db.query('INSERT INTO categories (name) VALUES ($1) RETURNING *', [name]);
    res.json(newCategory.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
})};

module.exports = router;