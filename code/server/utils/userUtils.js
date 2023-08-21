/**
 * Insert a new user's information into the database.
 * @param {string} username - The new user's username.
 * @param {string} email - The new user's email.
 * @param {string} hashedPassword - The hashed password of the new user.
 * @param {string} phone_number - The new user's phone number.
 * @param {Object} sql - The SQL object used for database queries.
 */
const insertNewUser = async (username, email, hashedPassword, phone_number, sql) => {
  // Execute an SQL query to insert the new user's information into the 'users' table
  await sql`
    INSERT INTO users (username, email, password_hash, phone_number, created_at)
    VALUES (${username}, ${email}, ${hashedPassword}, ${phone_number}, NOW())
  `;
};


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

/**
 * Update the last_login field for a user in the database.
 * @param {number} userId - The ID of the user to update.
 * @param {Object} sql - The SQL object used for database queries.
 * @returns {Promise<void>}
 */
const updateLastLogin = async (userId, sql) => {
  await sql`
    UPDATE users
    SET last_login = NOW()
    WHERE user_id = ${userId}
  `;
};

/**
 * Retrieve a user by username from the database.
 * @param {string} username - The username of the user to retrieve.
 * @param {Object} sql - The SQL object used for database queries.
 * @returns {Promise<Object|null>} - The user object if found, or null if not found.
 */
const getUserByUsername = async (username, sql) => {
  const [user] = await sql`SELECT * FROM users WHERE username = ${username}`;
  return user || null;
};

// Export the utility functions
module.exports = {
  insertNewUser,
  checkUserExists,
  updateLastLogin,
  getUserByUsername,
};
