/**
 * Represents a user with various attributes.
 */
class User {
    /**
     * Create a new User instance.
     * @param {number} user_id - The unique identifier of the user.
     * @param {string} username - The username of the user.
     * @param {string} email - The email of the user.
     * @param {string} password_hash - The hashed password of the user.
     * @param {string} phone_number - The phone number of the user.
     * @param {Date} created_at - The date and time when the user was created.
     * @param {Date} last_login - The date and time of the user's last login.
     */
    constructor(user_id, username, email, password_hash, phone_number, rights_level, created_at, last_login) {
      this.user_id = user_id;
      this.username = username;
      this.email = email;
      this.password_hash = password_hash;
      this.phone_number = phone_number;
      this.rights_level = rights_level;
      this.created_at = created_at;
      this.last_login = last_login;
    }
  
    /**
     * Convert a row from the database to a User object.
     * @param {Object} row - The database row representing a user.
     * @returns {User} - The User object created from the database row.
     */
    static fromDatabaseRow(row) {
      return new User(
        row.user_id,
        row.username,
        row.email,
        row.password_hash,
        row.phone_number,
        row.rights_level,
        row.created_at,
        row.last_login
      );
    }
  }
  
  /**
   * Represents a return model for user login with token and user information.
   */
  class LoginReturnModel {
    /**
     * Create a new LoginReturnModel instance.
     * @param {string} token - The JWT token.
     * @param {string} username - The username of the user.
     * @param {string} email - The email of the user.
     * @param {string} phone - The phone number of the user.
     * @param {string} rights - The rights level of the user.
     */
    constructor(token, username, email, phone, rights) {
      this.token = token;
      this.user = {
        username,
        email,
        phone,
        rights
      };
    }
  
    /**
     * Convert the LoginReturnModel instance to the desired response format.
     * @returns {Object} - The response object with token and user information.
     */
    toResponseJSON() {
      return {
        token: this.token,
        user: {
          username: this.user.username,
          email: this.user.email,
          phone: this.user.phone,
          rights: this.user.rights
        }
      };
    }
  }
  
  // Export the utility classes
  module.exports = {
    User,
    LoginReturnModel,
  };
  