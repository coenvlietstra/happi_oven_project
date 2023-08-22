// Import necessary modules and utility functions
const { sql } = require('../database/connection');
const { insertMenuItem, fetchDishByYearWeekAndDay } = require('../utils/menuUtils'); // Import menu utility functions
const { calculateYearWeekAndDay } = require('../helpers/dateHelpers'); // Updated date utility function
const { ResponseMessages, ResponseStatus } = require('../utils/responseConstants');

// Number of days to loop through when creating menu items
const DAYS_IN_MENU = 4;

/**
 * Create menu items for a given starting date and dishes.
 * @param {Object} req - The request object containing starting date and dishes in the request body.
 * @param {Object} res - The response object to send appropriate responses to the client.
 * @returns {Promise<Object>} - A JSON response indicating success or failure of menu item creation.
 */
const createMenuItem = async (req, res) => {
  // Destructure startingDate and dishes from the request body
  const { startingDate, dishes } = req.body;

  try {
    // Parse the starting date
    const startDate = new Date(startingDate);

    // Loop through the specified number of days to create menu items
    for (let dayIndex = 0; dayIndex < DAYS_IN_MENU; dayIndex++) {
      // Calculate the current day by adding the day index to the starting date
      const currentDay = new Date(startDate);
      currentDay.setDate(startDate.getDate() + dayIndex);

      // Calculate the year, week number, and day of the week for the current day
      const { year, weekNumber, dayOfWeek } = calculateYearWeekAndDay(currentDay);

      // Get the dish information for the current day
      const dish = dishes[dayIndex];

      // Check for conflicts before inserting the menu item
      const existingDishes = await fetchDishByYearWeekAndDay(sql, year, weekNumber, dayOfWeek);
      if (existingDishes.length > 0) {
        return res.status(ResponseStatus.CONFLICT).json({ message: ResponseMessages.CONFLICT_MENU_ITEM });
      }

      // Insert the menu item into the database using utility function
      await insertMenuItem(year, weekNumber, dayOfWeek, dish, sql);
    }

    // Return a 201 Created response indicating success
    return res.status(ResponseStatus.SUCCESS).json({ message: ResponseMessages.CREATION_SUCCESS });
  } catch (error) {
    // Handle errors by logging and sending a 500 Internal Server Error response
    console.error('Error creating menu items:', error);
    return res.status(ResponseStatus.INTERNAL_ERROR).json({ message: ResponseMessages.INTERNAL_SERVER_ERROR });
  }
};

module.exports = {
  createMenuItem,
};
