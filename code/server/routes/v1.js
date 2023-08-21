// Import the required module
const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController'); // Import user registration controller
const loginUser = require('../controllers/authController'); // Import user authentication controller
const { createMenuItem } = require('../controllers/createMenuController'); // Import create menu controller
const { getDishesFromStartDate } = require('../controllers/getMenuController'); // Import get menu controller

// Define the routes for version 1 (v1) API -- START

// Route for user registration
router.post('/register', registerController.registerUser);

// Route for user authentication
router.post('/auth', loginUser.loginUser);

// Route for creating menu items
router.post('/create-menu', createMenuItem);

// Route for getting menu items based on start date
router.get('/get-menu', getDishesFromStartDate);

// Define the routes for version 1 (v1) API -- END

// Export the router for use in other modules
module.exports = router;
