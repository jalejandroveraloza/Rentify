const express = require("express");
const router = express.Router();
const db = require('./db');

module.exports = (db) => {
  // Product page
  router.get("/:id", (req, res) => {
    const id = req.params.id;

    db.query(
      `SELECT * FROM products WHERE id = ${id};`
    )
      .then((data) => {
        const currentUser = req.session.user_id;
        const product = data.rows[0];
        const templateVars = {
          product,
          currentUser,
          message: "",
        };
        res.render("products", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  })};

  module.exports = router;