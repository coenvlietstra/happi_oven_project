// Import the bcrypt library for password hashing
const bcrypt = require('bcrypt');

/**
 * Hashes a user's password using bcrypt.
 * @param {string} password - The user's plain text password.
 * @returns {Promise<string>} - The hashed password.
 */
const hashUserPassword = async (password) => {
  // Hash the provided password using bcrypt with a salt factor of 10
  return await bcrypt.hash(password, 10);
};

/**
 * Compare a plaintext password with a hashed password.
 * @param {string} plaintextPassword - The plaintext password to compare.
 * @param {string} hashedPassword - The hashed password to compare against.
 * @returns {Promise<boolean>} - True if the passwords match, false otherwise.
 */
const comparePassword = async (plaintextPassword, hashedPassword) => {
  return await bcrypt.compare(plaintextPassword, hashedPassword);
};

// Export the hashUserPassword function for external use
module.exports = {
  hashUserPassword,
  comparePassword,
};
