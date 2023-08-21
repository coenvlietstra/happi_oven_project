/**
 * Generate a return model containing a token and user information.
 * @param {string} token - The JWT token.
 * @param {string} username - The username of the user.
 * @param {string} email - The email of the user.
 * @param {string} phone - The phone number of the user.
 * @returns {Object} - The generated return model.
 */
const loginReturnModel = (token, username, email, phone) => {
    return {
      token,
      user: {
        username,
        email,
        phone
      }
    };
  };
  
  // Export the utility function
  module.exports = {
    loginReturnModel,
  };