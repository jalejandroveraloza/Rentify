const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // add a new product page (admin access only)
  router.get("/addListing", (req, res) => {
    db.query(
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
  router.post("/addListing", (req, res) => {
    const product_name = req.body.product_name;
    const description = req.body.description;
    const photo_url = req.body.photo_url;
    const brand = req.body.brand;
    const price = req.body.price;
    const active = req.body.active;

    const queryParams = [
      product_name,
      description,
      photo_url,
      brand,
      price,
      active,
    ];
    const queryString = `
      INSERT INTO products (product_name, description, photo_url, brand, price, active)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;

    db.query(queryString, queryParams)
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

  return router;
};
