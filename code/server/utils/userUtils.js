// userUtils.js

/**
 * Check if a user with the given username or email already exists in the database.
 * @param {string} username - The username to check.
 * @param {string} email - The email to check.
 * @param {Object} sql - The SQL object used for database queries.
 * @returns {Promise<boolean>} - True if a user with the provided username or email exists, false otherwise.
 */
const checkUserExists = async (username, email, sql) => {
  // Query the database to find users with the provided username or email
  const existingUser = await sql`
    SELECT * FROM users WHERE username = ${username} OR email = ${email}
  `;
  
  // If any user with the given username or email exists, return true; otherwise, return false
  return existingUser.length > 0;
};

// Export the checkUserExists function
module.exports = {
  checkUserExists,
};
