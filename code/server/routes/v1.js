// Import the required module
const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const loginUser = require('../controllers/authController');


// Define the routes for version 1 (v1) API -- START

// Route for user registration
router.post('/register', registerController.registerUser);

// Route for user authentication route
router.post('/auth', loginUser.loginUser);

// Define the routes for version 1 (v1) API -- END

// Export the router for use in other modules
module.exports = router;
