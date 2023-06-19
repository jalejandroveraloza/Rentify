const express = require("express");
const router = express.Router();

module.exports = (pool) => {
  
  // Get all products
  router.get("/", async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM users");
      res.json(result.rows);
    } catch (error) {
      console.error("Error retrieving users:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving users" });
    }
  });

  // Get a specific user by ID
  router.get("/:id", async (req, res) => {
    const userId = req.params.id;
    try {
      const result = await pool.query("SELECT * FROM users WHERE id = $1", [
        userId,
      ]);
      if (result.rows.length === 0) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      console.error("Error retrieving user:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving the user" });
    }
  });

  // Create a new user
  router.post("/", async (req, res) => {
    const { name, email, password, address } = req.body;

    try {
      const result = await pool.query(
        "INSERT INTO users (name, email, password, address) VALUES ($1, $2, $3, $4) RETURNING *",
        [name, email, password, address]
      );
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error creating user:", error);
      res
        .status(500)
        .json({ error: "An error occurred while creating the user" });
    }
  });

  // Update an existing user
  router.put("/:id", async (req, res) => {
    const userId = req.params.id;
    const { name, email, password, address } = req.body;
    try {
      const result = await pool.query(
        "UPDATE users SET name = $1, email = $2, password = $3, address = $4 WHERE id = $5 RETURNING *",
        [name, email, password, address, userId]
      );
      if (result.rows.length === 0) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      res
        .status(500)
        .json({ error: "An error occurred while updating the user" });
    }
  });

  // Delete a user
  router.delete("/:id", async (req, res) => {
    const userId = req.params.id;
    try {
      const result = await pool.query(
        "DELETE FROM users WHERE id = $1 RETURNING *",
        [userId]
      );
      if (result.rows.length === 0) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json({ message: "User deleted successfully" });
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the user" });
    }
  });

  // Login user
  
  router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const result = await pool.query(
        "SELECT * FROM users WHERE email = $1 AND password = $2",
        [email, password]
      );
      if (result.rows.length === 0) {
        res.status(401).json({ error: "Invalid email or password" });
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      console.error("Error logging in user:", error);
      res
        .status(500)
        .json({ error: "An error occurred while logging in the user" });
    }
  });

  return router;
};
