const express = require("express");
const router = express.Router();
const db = require('./db');

module.exports = (db) => {
  // GET ------------------------------------------------------------------------
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        const currentUser = users[req.session.user_id];
        res.render("login", { currentUser, users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/login", (req, res) => {
    const currentUser = req.session.user_id;
    const templateVars = { currentUser };
    res.render("login", templateVars);
  });

  router.get("/login/:id", (req, res) => {
    const currentUser = req.session.user_id;
    req.session.user_id = req.params.id;
    const templateVars = { currentUser };
    res.redirect("/");
  });
  // END OF GET --------------------------------------------------------------------

  // POSTS -------------------------------------------------------------------------
  router.post("/login", (req, res) => {
    db.query(`SELECT * FROM users WHERE email = '${req.body.email}';`)
      .then((data) => {
        const user = data.rows[0];
        if (user) {
          req.session.user_id = user;
          res.redirect("/");
        } else {
          res.json({ result: "Sorry, you are not a user" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // LOGOUT
  router.post("/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
  });

  return router;
};

module.exports = router;