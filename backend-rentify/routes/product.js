const express = require("express");
const app = express();
const pool = require("../db");

  // Product page

  app.get("/:id", (req, res) => {
    const id = req.params.id;

    pool.query(
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
  });

