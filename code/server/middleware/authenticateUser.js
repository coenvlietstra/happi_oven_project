const jwt = require('jsonwebtoken'); // Import the JSON Web Token library
const { ResponseStatus, ResponseMessages } = require('../utils/responseConstants'); // Import custom response status and messages
require('dotenv').config(); // Load environment variables from '.env' file
const { verifyToken } = require('../utils/jwtUtils'); // Import utility function to verify tokens

const { JWT_SECRET } = process.env; // Extract the JWT secret key from environment variables

// Middleware to authenticate users using JWT
const authenticateUser = (req, res, next) => {
  // Get the token from the 'Authorization' header, removing the 'Bearer ' prefix
  const token = req.headers.authorization.split(' ')[1];

  // Check if token is missing or invalid
  if (!token) {
    // Return a 401 Unauthorized response with an appropriate message
    return res.status(ResponseStatus.UNAUTHORIZED).json({ message: ResponseMessages.UNAUTHORIZED });
  }

  try {
    // Verify the token and extract user data using the JWT_SECRET
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach the decoded user data to the request object for later use
    req.user = decoded; // Assuming the token payload contains user data, including 'id'

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle token verification errors
    if (error.name === 'TokenExpiredError') {
      // Return a 401 Unauthorized response with a message indicating token expiration
      return res.status(ResponseStatus.UNAUTHORIZED).json({ message: ResponseMessages.TOKEN_EXPIRED });
    }

    // If verification fails for other reasons, return a 401 Unauthorized response
    return res.status(ResponseStatus.UNAUTHORIZED).json({ message: ResponseMessages.UNAUTHORIZED });
  }
};

module.exports = {
  authenticateUser,
};
