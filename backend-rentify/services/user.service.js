const UserRepository = require("../repositories/user.repository.js");

// Regras de Negocio

async function createUser(user) {
  await UserRepository.createUser(user);
}

async function updateUser(user) {
  await UserRepository.updateUser(user);
}

async function getUsers() {
  return await UserRepository.getUsers();
}

async function getUser(userId) {
  return await UserRepository.getUser(userId);
}

async function deleteUser(userId) {
  await UserRepository.deleteUser(userId);
}

async function getUserLogin(data) {
  return await UserRepository.getUserLogin(data);
}

module.exports = {
  createUser,
  updateUser,
  getUsers,
  getUser,
  deleteUser,
  getUserLogin,
};
