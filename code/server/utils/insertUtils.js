const insertNewUser = async (username, email, hashedPassword, phone_number, sql) => {
    await sql`
      INSERT INTO users (username, email, password_hash, phone_number, created_at)
      VALUES (${username}, ${email}, ${hashedPassword}, ${phone_number}, NOW())
    `;
  };
  
  module.exports = {
    insertNewUser,
  };