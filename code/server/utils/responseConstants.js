// Define custom response messages for different scenarios
const ResponseMessages = {
  USERNAME_EMAIL_EXISTS: 'Username or email already exists',
  REGISTRATION_SUCCESS: 'User registered successfully',
  INTERNAL_SERVER_ERROR: 'An internal server error occurred',
  INVALID_CREDENTIALS: 'Incorrect username & or password',
  USER_NOT_FOUND: 'User does not exist',
  CREATION_SUCCESS: 'Menu created succesfully',
  UPDATE_ITEM_SUCCESS: 'Menu item updated successfully',
  CONFLICT_MENU_ITEM: 'Menu item already exists',
  UNAUTHORIZED: 'User is not authorized',
  TOKEN_EXPIRED: 'User token has expired'
};

// Define custom response status codes for different scenarios
const ResponseStatus = {
  CONFLICT: 409,      // Indicates a conflict (e.g., user already exists)
  SUCCESS: 201,       // Indicates a successful operation
  INTERNAL_ERROR: 500, // Indicates an internal server error
  UNAUTHORIZED: 401, // Indicates unauthorized access attempt
  NOT_FOUND: 404, // Indicates the server could not find what you requested
};

// Export the defined response messages and status codes for external use
module.exports = {
  ResponseMessages,
  ResponseStatus,
};
