const { json } = require("express");
// import UserSchema from "../schemas/user.schema.js";
// import { connect } from "./mongo.db.js";
const pool = require("../repositories/connectDb.js");

// Persistencia de Dados (conecta-se com o banco de dados)

async function createUser(user) {
  const { name, email, password, address } = user;

  try {
    const result = await pool.query(
      "INSERT INTO users (name, email, password, address) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, password, address]
    );
    return result.rows[0];
  } catch (err) {
    throw err;
  }
}

async function updateUser(userId) {
    try {
      const result = await pool.query(
        "UPDATE users SET name = $1, email = $2, password = $3, address = $4 WHERE id = $5 RETURNING *",
        [name, email, password, address, userId]
      );
     
      if (result.rows.length === 0) {
        throw { status: 401, message: "User not found" };
      }

      return result.rows[0];
      
    } catch (err) {
      throw err;
    }
}

async function getUser(userId) {
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [
      userId,
    ]);
    if (result.rows.length === 0) {
      return { error: "User not found" };
    } else {
      return result.rows[0];
    }
  } catch (err) {
    throw err;
  }
}

async function getUsers() {
  try {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  } catch (err) {
    throw err;
  }
}

async function deleteUser(userId) {
    try {
      const result = await pool.query(
        "DELETE FROM users WHERE id = $1 RETURNING *",
        [userId]
      );

      if (result.rows.length === 0) {
        throw { status: 401, message: "User not found" };
      }

      return res.json(result.rows[0]);

    } catch (err) {
      throw err;
    }
}

async function getUserLogin(data) {
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1 and password = $2",
      [data.email, data.password]
    );

    if (result.rows.length === 0) {
      throw { status: 401, message: "Invalid email or password" };
    }
    return result.rows[0];c
  } catch (err) {
    throw { status: 401, message: "Internal Server Error" };
  }
}

module.exports = {
  createUser,
  updateUser,
  getUser,
  getUsers,
  deleteUser,
  getUserLogin,
};
