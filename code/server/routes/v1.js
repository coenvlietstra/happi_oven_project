// Import the required module
const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

// Define the routes for version 1 (v1) API -- START

// Route for user registration
router.post('/register', registerController.registerUser);

// Define the routes for version 1 (v1) API -- END

// Export the router for use in other modules
module.exports = router;
