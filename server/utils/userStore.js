const fs = require('fs');
const path = require('path');

const USERS_DIR = path.join(__dirname, '../data/users');

// Ensure users directory exists
if (!fs.existsSync(USERS_DIR)) {
  fs.mkdirSync(USERS_DIR, { recursive: true });
}

// Generate file path from email
const getUserFilePath = (email) => {
  const safeEmail = email.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  return path.join(USERS_DIR, `${safeEmail}.json`);
};

// Load a user by email
const loadUser = (email) => {
  const filePath = getUserFilePath(email);
  if (!fs.existsSync(filePath)) return null;
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// Save a user
const saveUser = (user) => {
  const filePath = getUserFilePath(user.email);
  fs.writeFileSync(filePath, JSON.stringify(user, null, 2));
};

// Delete a user
const deleteUser = (email) => {
  const filePath = getUserFilePath(email);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};

// Update user (loads, modifies, saves)
const updateUser = (email, updateFn) => {
  const user = loadUser(email);
  if (!user) return null;
  const updatedUser = updateFn(user);
  saveUser(updatedUser);
  return updatedUser;
};

// Check if user exists
const userExists = (email) => {
  return fs.existsSync(getUserFilePath(email));
};

module.exports = {
  loadUser,
  saveUser,
  deleteUser,
  updateUser,
  userExists
};
