const ResponseMessages = {
    USERNAME_EMAIL_EXISTS: 'Username or email already exists',
    REGISTRATION_SUCCESS: 'User registered successfully',
    INTERNAL_SERVER_ERROR: 'An internal server error occurred',
  };
  
  const ResponseStatus = {
    CONFLICT: 409,
    SUCCESS: 201,
    INTERNAL_ERROR: 500,
  };
  
  module.exports = {
    ResponseMessages,
    ResponseStatus,
  };
  