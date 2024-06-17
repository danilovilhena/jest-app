const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../../users.json");

const readUsers = () => {
  const data = fs.readFileSync(usersFilePath);
  return JSON.parse(data);
};

const writeUsers = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

const getAllUsers = (req, res) => {
  const users = readUsers();
  res.json(users);
};

const getUserById = (req, res) => {
  const users = readUsers();
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

const createUser = (req, res) => {
  const users = readUsers();
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  writeUsers(users);
  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const users = readUsers();
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    user.name = req.body.name;
    user.email = req.body.email;
    writeUsers(users);
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

const deleteUser = (req, res) => {
  let users = readUsers();
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (index !== -1) {
    users.splice(index, 1);
    writeUsers(users);
    res.json({ message: "User deleted" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
