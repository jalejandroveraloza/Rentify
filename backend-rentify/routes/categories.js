const express = require("express");
const router = express.Router();

// GET /categories
module.exports = (pool) => {
  router.get("/", async (req, res) => {
    try {
      const categories = await pool.query("SELECT * FROM categories");
      res.json(categories.rows);
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  });

  // POST /categories

  router.post("/categories", async (req, res) => {
    const { name } = req.body;
    try {
      const newCategory = await pool.query(
        "INSERT INTO categories (name) VALUES ($1) RETURNING *",
        [name]
      );
      res.json(newCategory.rows[0]);
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  });

  return router;
};
