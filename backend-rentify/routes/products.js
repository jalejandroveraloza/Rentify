const express = require("express");
const router = express.Router();

module.exports = (pool) => {
  // Get all Products
  router.get("/", async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM products");
      res.json(result.rows);
    } catch (error) {
      console.error("Error retrieving products:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving products" });
    }
  });

  // Get a specific prodcut by ID
  router.get("/:id", async (req, res) => {
    const productId = req.params.id;
    try {
      const result = await pool.query("SELECT * FROM products WHERE id = $1", [
        productId,
      ]);
      if (result.rows.length === 0) {
        res.status(404).json({ error: "Product not found" });
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      console.error("Error retrieving product:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving the product" });
    }
  });

  // Create a new user
  router.post("/", async (req, res) => {
    const { name, description, category_id, photo_url, price, active } =
      req.body;

    try {
      const result = await pool.query(
        "INSERT INTO products (name, description, category_id, photo_url, price, active) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [name, description, category_id, photo_url, price, active]
      );
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error creating user:", error);
      res
        .status(500)
        .json({ error: "An error occurred while creating the product" });
    }
  });

  // Update an existing user
  router.put("/:id", async (req, res) => {
    const productId = req.params.id;
    const { name, description, category_id, photo_url, price, active } =
      req.body;
    try {
      const result = await pool.query(
        "UPDATE products SET name = $1, description = $2, category_id = $3, photo_url = $4, price = $5, active = $6 WHERE id = $7 RETURNING *",
        [name, description, category_id, photo_url, price, active, productId]
      );
      if (result.rows.length === 0) {
        res.status(404).json({ error: "Product not found" });
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      console.error("Error updating product:", error);
      res
        .status(500)
        .json({ error: "An error occurred while updating the product" });
    }
  });

  // Delete a user
  router.delete("/:id", async (req, res) => {
    const productId = req.params.id;
    try {
      const result = await pool.query(
        "DELETE FROM products WHERE id = $1 RETURNING *",
        [productId]
      );
      if (result.rows.length === 0) {
        res.status(404).json({ error: "Product not found" });
      } else {
        res.json({ message: "Product deleted successfully" });
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the product" });
    }
  });

  // Get a specific product by search
  router.post("/search", async (req, res) => {
    const productName = req.body;
    try {
      const result = await pool.query(
        "SELECT * FROM products WHERE name LIKE $1",
        [`%${productName}%`] // Updated parameter value with proper wildcard placement
      );
      if (result.rows.length === 0) {
        res.status(404).json({ error: "Product not found" });
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      console.error("Error retrieving product:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving the product" });
    }
  });

  return router;
};
