const express = require("express");
const router = express.Router();

module.exports = (pool) => {
  // Get all orders
  router.get("/", async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM orders");
      res.json(result.rows);
    } catch (error) {
      console.error("Error retrieving orders:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving orders" });
    }
  });

  // Get all orders by user ID
  router.get("/user/:id", async (req, res) => {
    try {
      const result = await pool.query(
        "SELECT * FROM orders WHERE user_id = $1",
        [req.params.id]
      );
      res.json(result.rows);
    } catch (error) {
      console.error("Error retrieving orders:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving orders" });
    }
  });

  // Get a specific order by ID
  router.get("/:id", async (req, res) => {
    const orderId = req.params.id;
    try {
      const result = await pool.query("SELECT * FROM orders WHERE id = $1", [
        orderId,
      ]);
      if (result.rows.length === 0) {
        res.status(404).json({ error: "Order not found" });
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      console.error("Error retrieving order:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving the order" });
    }
  });

  // Create a new order
  router.post("/", async (req, res) => {
    const { user_id, product_id, total, date } = req.body;

    try {
      const result = await pool.query(
        "INSERT INTO orders (user_id, product_id, total, date) VALUES ($1, $2, $3, $4) RETURNING *",
        [user_id, product_id, total, date]
      );
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error creating order:", error);
      res
        .status(500)
        .json({ error: "An error occurred while creating the order" });
    }
  });

  // Update an existing order
  router.put("/:id", async (req, res) => {
    const orderId = req.params.id;
    const { user_id, product_id, total, date } = req.body;
    try {
      const result = await pool.query(
        "UPDATE orders SET user_id = $1, product_id = $2, total = $3, date = $4 WHERE id = $5 RETURNING *",
        [user_id, product_id, total, date, orderId]
      );
      if (result.rows.length === 0) {
        res.status(404).json({ error: "Order not found" });
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      console.error("Error updating order:", error);
      res
        .status(500)
        .json({ error: "An error occurred while updating the order" });
    }
  });

  // Delete an order
  router.delete("/:id", async (req, res) => {
    const orderId = req.params.id;
    try {
      const result = await pool.query(
        "DELETE FROM orders WHERE id = $1 RETURNING *",
        [orderId]
      );
      if (result.rows.length === 0) {
        res.status(404).json({ error: "Order not found" });
      } else {
        res.json({ message: "Order deleted successfully" });
      }
    } catch (error) {
      console.error("Error deleting order:", error);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the order" });
    }
  });

  return router;
};
