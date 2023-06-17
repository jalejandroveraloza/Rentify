const UserService = require("../services/user.service.js");

// Validacao e resposta da requisição

async function createUser(req, res, next) {
  try {
    await UserService.createUser(req.body);
    try {
      res.status(200).json({
        success: true,
        message: "User created successfully",
        userId: req.body.id,
      });
      res.end();
    } catch (err) {
      res.status(500).json({ error: err });
    }
  } catch (err) {
    next(err);
  }
}

async function updateUser(req, res, next) {
  try {
    let user = req.body;
    if (!user.userId) {
      throw new Error("User ID é obrigatório.");
    }
    await UserService.updateUser(user);
    res.end();
  } catch (err) {
    next(err);
  }
}

async function getUsers(req, res, next) {
  try {
    res.send(await UserService.getUsers());
  } catch (err) {
    next(err);
  }
}

async function getUser(req, res, next) {
  try {
    res.send(await UserService.getUser(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function deleteUser(req, res, next) {
  try {
    res.send(await UserService.deleteUser(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function getUserLogin(req, res, next) {
  try {
    res.send(await UserService.getUserLogin(req.body));
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createUser,
  updateUser,
  getUsers,
  getUser,
  deleteUser,
  getUserLogin,
};
