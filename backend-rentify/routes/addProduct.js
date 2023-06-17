const express = require("express");
const app = express();
const pool = require("../db");

  // add a new product page (admin access only)
  app.get("/products", (req, res) => {
    pool.query(
      `SELECT * FROM products;`
    )
      .then((data) => {
        const currentUser = req.session.user_id;
        const products = data[1].rows;
        const templateVars = { products, currentUser };
        if (!templateVars.currentUser) {
          res.json({ result: "Unauthorized Access" });
        }
        res.render("product_add", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // add product form
  app.post("/products", (req, res) => {
    const product_name = req.body.name;
    const description = req.body.description;
    const photo_url = req.body.photo_url;
    const price = req.body.price;
    const active = req.body.active;

    const queryParams = [
      product_name,
      description,
      photo_url,
      price,
      active,
    ];
    const queryString = `
      INSERT INTO products (name, description, photo_url, price, active)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    pool.query(queryString, queryParams)
      .then((data) => {
        const currentUser = req.session.user_id;
        const products = data.rows;
        const templateVars = {
          products,
          currentUser,
          message: "Your product has been added",
        };
        res.render("product_add", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });


