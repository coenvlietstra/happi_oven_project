// Import necessary modules and utility functions
const { sql } = require('../database/connection'); // Database connection utility
const { calculateYearWeekAndDay } = require('../helpers/dateHelpers'); // Date calculation utility
const { fetchDishesByYearWeekAndDay } = require('../utils/menuUtils'); // Custom utility function for fetching dishes
const { ResponseMessages, ResponseStatus } = require('../utils/responseConstants'); // Custom response constants for consistent messaging

/**
 * Retrieve dishes from a specified start date and respond with the results.
 * @param {Object} req - The request object containing the starting date in the request body.
 * @param {Object} res - The response object to send appropriate responses to the client.
 * @returns {Promise<Object>} - A JSON response with dishes or an error message.
 */
const getDishesFromStartDate = async (req, res) => {
  const { startingDate, year } = req.body; // Get the starting date and year from the request body

  try {
    // Calculate the week number and day of the week for the provided start date
    const {year, weekNumber, dayOfWeek } = calculateYearWeekAndDay(startingDate);

    // Fetch dishes using the new utility function with year, week number, and day of the week
    const dishes = await fetchDishesByYearWeekAndDay(sql, year, weekNumber, dayOfWeek);

    // Return a 200 OK response with fetched dishes
    return res.status(ResponseStatus.SUCCESS).json(dishes);
  } catch (error) {
    // Handle errors by logging and sending a 500 Internal Server Error response
    console.error('Error retrieving dishes:', error);
    return res.status(ResponseStatus.INTERNAL_ERROR).json({ message: ResponseMessages.INTERNAL_SERVER_ERROR });
  }
};

// Export the controller function for external use
module.exports = {
  getDishesFromStartDate,
};
