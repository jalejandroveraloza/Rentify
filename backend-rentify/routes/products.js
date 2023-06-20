const express = require("express");
const router = express.Router();

module.exports = (pool) => {
  // Get all Listings
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

    // Get products by user ID
  router.get("/user/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
      const result = await pool.query("SELECT * FROM products WHERE user_id = $1", [
        userId,
      ]);
      res.json(result.rows);
    } catch (error) {
      console.error("Error retrieving products by user ID:", error);
      res.status(500).json({ error: "An error occurred while retrieving products by user ID" });
    }
  });


  // Get a specific product by ID
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

  // Create a new listing
  router.post("/", async (req, res) => {
    const { name, description, category_id, photo_url, price, active, user_id } =
      req.body;

    try {
      const result = await pool.query(
        "INSERT INTO products (name, description, category_id, photo_url, price, active, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [name, description, category_id, photo_url, price, active, user_id]
      );
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error creating user:", error);
      res
        .status(500)
        .json({ error: "An error occurred while creating the product" });
    }
  });

  // Update an existing listing
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

  // Delete a listing
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

   // Get best sales products
   router.get("/best-sales", async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM products ORDER BY sales DESC LIMIT 10");
      res.json(result.rows);
    } catch (error) {
      console.error("Error retrieving best sales products:", error);
      res.status(500).json({ error: "An error occurred while retrieving best sales products" });
    }
  });

  // Get new arrival products
  router.get("/new-arrivals", async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM products ORDER BY created_at DESC LIMIT 10");
      res.json(result.rows);
    } catch (error) {
      console.error("Error retrieving new arrival products:", error);
      res.status(500).json({ error: "An error occurred while retrieving new arrival products" });
    }
  });

   // Get discounted products
   router.get("/discounted", async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM products WHERE discounted = true");
      res.json(result.rows);
    } catch (error) {
      console.error("Error retrieving discounted products:", error);
      res.status(500).json({ error: "An error occurred while retrieving discounted products" });
    }
  });


  return router;
};
