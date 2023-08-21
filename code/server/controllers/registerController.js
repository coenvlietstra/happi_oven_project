// Import necessary utility functions and constants
const { checkUserExists } = require('../utils/userUtils');
const { hashUserPassword } = require('../utils/passwordUtils');
const { insertNewUser } = require('../utils/userUtils');
const { ResponseMessages, ResponseStatus } = require('../utils/responseConstants');

/**
 * Register a new user by processing provided user information and performing necessary checks.
 * @param {Object} req - The request object containing user information in the request body.
 * @param {Object} res - The response object to send appropriate responses to the client.
 * @returns {Promise<Object>} - A JSON response indicating success or failure of user registration.
 */
const registerUser = async ({ body, sql }, res) => {
  // Destructure the relevant properties from the request body
  const { username, email, password, phone_number } = body;

  try {
    // Check if the user with the given username or email already exists in the database
    if (await checkUserExists(username, email, sql)) {
      // Return a response indicating a conflict (user already exists)
      return res.status(ResponseStatus.CONFLICT).json({ message: ResponseMessages.USERNAME_EMAIL_EXISTS });
    }

    // Hash the user's password for security
    const hashedPassword = await hashUserPassword(password);

    // Insert the new user's information into the database
    await insertNewUser(username, email, hashedPassword, phone_number, sql);

    // Return a response indicating successful user registration
    return res.status(ResponseStatus.SUCCESS).json({ message: ResponseMessages.REGISTRATION_SUCCESS });
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error registering user:', error);

    // Rethrow the error to be caught by the error-handling middleware
    throw error;
  }
};

// Export the registerUser controller function
module.exports = {
  registerUser,
};
