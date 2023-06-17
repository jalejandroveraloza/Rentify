const { json } = require("express");
const pool = require("../repositories/connectDb.js");

// Persistencia de Dados (conecta-se com o banco de dados)


async function getProducts(data) {
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1 and password = $2",
      [data.email, data.password]
    );

    if (result.rows.length === 0) {
      throw { status: 401, message: "Invalid email or password" };
    }
    return result.rows[0];
  } catch (err) {
    throw { status: 401, message: "Internal Server Error" };
  }
}

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



module.exports = {
  getProducts,
};
