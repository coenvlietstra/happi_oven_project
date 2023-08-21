const { sql } = require('../database/connection');
const { generateToken } = require('../utils/jwtUtils');
const { updateLastLogin, getUserByUsername } = require('../utils/userUtils');
const { comparePassword } = require('../utils/passwordUtils');
const { ResponseStatus, ResponseMessages } = require('../utils/responseConstants');

/**
 * Log in a user by checking provided credentials and generating a JWT token upon success.
 * @param {Object} req - The request object containing user credentials in the request body.
 * @param {Object} res - The response object to send appropriate responses to the client.
 * @returns {Promise<Object>} - A JSON response indicating success or failure of login.
 */
const loginUser = async (req, res) => {
  // Destructure username and password from the request body
  const { username, password } = req.body;

  try {
    // Retrieve user information from the database based on the provided username
    const user = await getUserByUsername(username, sql);

    // If no user found, return a 401 Unauthorized response
    if (!user) {
      return res.status(ResponseStatus.UNAUTHORIZED).json({ message: ResponseMessages.USER_NOT_FOUND });
    }

    // Compare the provided password with the hashed password from the database
    const passwordMatch = await comparePassword(password, user.password_hash);

    // If passwords don't match, return a 401 Unauthorized response
    if (!passwordMatch) {
      return res.status(ResponseStatus.UNAUTHORIZED).json({ message: ResponseMessages.INVALID_CREDENTIALS });
    }

    // Update the last_login field in the database for the user
    updateLastLogin(user.user_id, sql);

    // Generate a JWT token for the user
    const token = generateToken(user);

    // Return a 200 OK response with the generated JWT token
    return res.status(ResponseStatus.SUCCESS).json({ token });
  } catch (error) {
    // Handle errors by logging and sending a 500 Internal Server Error response
    console.error('Error logging in user:', error);
    return res.status(ResponseStatus.INTERNAL_ERROR).json({ message: ResponseMessages.INTERNAL_SERVER_ERROR });
  }
};

module.exports = {
  loginUser,
};
