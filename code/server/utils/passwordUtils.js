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

// Export the hashUserPassword function for external use
module.exports = {
  hashUserPassword,
};
