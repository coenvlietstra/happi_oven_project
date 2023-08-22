const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

/**
 * Generate a JSON Web Token (JWT) for the given user object.
 * @param {Object} user - The user object containing user_id to be encoded in the token.
 * @returns {string} - The generated JWT token.
 */
function generateToken(user) {
  // Sign the user_id from the user object with the JWT_SECRET and set expiration to 1 hour
  const token = jwt.sign({ data: user }, JWT_SECRET, { expiresIn: '1h' });

  return token;
}

/**
 * Verify the authenticity of a JSON Web Token (JWT).
 * @param {string} token - The JWT token to be verified.
 * @returns {Object} - The decoded payload of the verified token.
 * @throws {Error} - Throws an error if the token verification fails.
 */
function verifyToken(token) {
  try {
    // Verify the token using the JWT_SECRET
    const decoded = jwt.verify(token, JWT_SECRET);

    return decoded;
  } catch (error) {
    // If token verification fails, throw an error
    throw new Error('Token verification failed');
  }
}

// Export the generateToken and verifyToken functions
module.exports = {
  generateToken,
  verifyToken,
};
