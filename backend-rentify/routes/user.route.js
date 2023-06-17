const express = require("express");
const UserController = require("../controllers/user.controller.js");

const router = express.Router();

router.get("/", UserController.getUsers);
router.post("/", UserController.createUser);
router.put("/", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);
router.get("/:id", UserController.getUser);
router.post("/login", UserController.getUserLogin);

module.exports = router;
