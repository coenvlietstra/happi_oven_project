// userUtils.js
const checkUserExists = async (username, email, sql) => {
    const existingUser = await sql`
      SELECT * FROM users WHERE username = ${username} OR email = ${email}
    `;
    return existingUser.length > 0;
  };
  
  module.exports = {
    checkUserExists,
  };