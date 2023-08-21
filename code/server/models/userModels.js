class User {
    constructor(user_id, username, email, password_hash, phone_number, created_at, last_login) {
      this.user_id = user_id;
      this.username = username;
      this.email = email;
      this.password_hash = password_hash;
      this.phone_number = phone_number;
      this.created_at = created_at;
      this.last_login = last_login;
    }

    // Create a static method to convert a row from the database to a User object
  static fromDatabaseRow(row) {
    return new User(
      row.user_id,
      row.username,
      row.email,
      row.password_hash,
      row.phone_number,
      row.created_at,
      row.last_login
    );
  }
}

/**
 * Generate a return model containing a token and user information.
 * @param {string} token - The JWT token.
 * @param {string} username - The username of the user.
 * @param {string} email - The email of the user.
 * @param {string} phone - The phone number of the user.
 * @returns {Object} - The generated return model.
 */
class LoginReturnModel {
    constructor(token, username, email, phone) {
      this.token = token;
      this.user = {
        username,
        email,
        phone,
      };
    }
  }
  
  // Export the utility function
  module.exports = {
    User,
    LoginReturnModel,
  };