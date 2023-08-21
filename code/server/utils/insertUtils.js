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

// Export the insertNewUser function for external use
module.exports = {
  insertNewUser,
};
