// Import the required module
const express = require('express');
const router = express.Router();

// Import controllers and utilities
const { registerUser } = require('../controllers/registerController'); // Import user registration controller
const { loginUser } = require('../controllers/authController'); // Import user authentication controller
const { createMenuItem } = require('../controllers/createMenuController'); // Import create menu controller
const { getDishesFromStartDate } = require('../controllers/getMenuController'); // Import get menu controller
const { getMenuItem, updateMenuItem } = require('../controllers/menuItemController'); // Import the menu item controller
const { authenticateUser } = require('../middleware/authenticateUser'); // Import authentication middleware

// Define the routes for version 1 (v1) API -- START

// Route for user registration
router.post('/register', registerUser);

// Route for user authentication
router.post('/auth', loginUser);

// Route for creating and getting menu items based on start date
router.route('/menu')
  .post(authenticateUser, createMenuItem) // Handle POST request to create menu items
  .get(authenticateUser, getDishesFromStartDate); // Handle GET request to retrieve menu items

// Route for handling menu item operations (get and update)
router.route('/menu-item')
  .get(authenticateUser, getMenuItem) // Handle GET request to retrieve a menu item
  .put(authenticateUser, updateMenuItem); // Handle PUT request to update a menu item

// Define the routes for version 1 (v1) API -- END

// Export the router for use in other modules
module.exports = router;
