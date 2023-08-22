// Import required modules and utilities
const { sql } = require('../database/connection');
const { ResponseMessages, ResponseStatus } = require('../utils/responseConstants');
const { fetchMenuItemById, updateMenuItemById } = require('../utils/menuUtils');

/**
 * Get a menu item by its dish_id.
 * @param {Object} req - The request object containing the query parameter 'id'.
 * @param {Object} res - The response object to send appropriate responses to the client.
 * @returns {Promise<Object>} - A JSON response indicating the retrieved menu item or an error message.
 */
const getMenuItem = async (req, res) => {
  const { id } = req.query;

  try {
    // Fetch the menu item using the provided dish_id
    const menuItem = await fetchMenuItemById(id, sql);

    // If menu item not found, return a 404 Not Found response
    if (!menuItem) {
      return res.status(ResponseStatus.NOT_FOUND).json({ message: ResponseMessages.NOT_FOUND });
    }

    // Return a 200 OK response with the retrieved menu item
    return res.status(ResponseStatus.SUCCESS).json(menuItem);
  } catch (error) {
    // Handle errors by logging and sending a 500 Internal Server Error response
    console.error('Error retrieving menu item:', error);
    return res.status(ResponseStatus.INTERNAL_ERROR).json({ message: ResponseMessages.INTERNAL_SERVER_ERROR });
  }
};

/**
 * Update a menu item by its dish_id.
 * @param {Object} req - The request object containing the query parameter 'id' and updated item details in the request body.
 * @param {Object} res - The response object to send appropriate responses to the client.
 * @returns {Promise<Object>} - A JSON response indicating the success of the update operation or an error message.
 */
const updateMenuItem = async (req, res) => {
  const { id } = req.query;
  const { dish_name, description, price, image_url } = req.body;

  try {
    // Update the menu item using the provided dish_id
    await updateMenuItemById(id, dish_name, description, price, image_url, sql);

    // Return a 200 OK response with a success message
    return res.status(ResponseStatus.SUCCESS).json({ message: ResponseMessages.UPDATE_ITEM_SUCCESS });
  } catch (error) {
    // Handle errors by logging and sending a 500 Internal Server Error response
    console.error('Error updating menu item:', error);
    return res.status(ResponseStatus.INTERNAL_ERROR).json({ message: ResponseMessages.INTERNAL_SERVER_ERROR });
  }
};

// Export the defined controller functions for use in other modules
module.exports = {
  getMenuItem,
  updateMenuItem,
};
