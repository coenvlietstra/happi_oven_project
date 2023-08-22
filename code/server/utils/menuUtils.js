/**
 * Insert a menu item into the database.
 * @param {number} weekNumber - The week number of the menu item.
 * @param {string} dayOfWeek - The day of the week of the menu item.
 * @param {Object} dish - The dish object containing dish information.
 * @param {Object} sql - The SQL template tag for querying the database.
 * @throws {Error} - Throws an error if the insertion process fails.
 */
const insertMenuItem = async (weekNumber, dayOfWeek, dish, sql) => {
  try {
    // Insert the menu item into the Dishes table using SQL template tag
    await sql`
      INSERT INTO Dishes (week_number, day_of_week, dish_name, description, price, image_url)
      VALUES (${weekNumber}, ${dayOfWeek}, ${dish.dish_name}, ${dish.description}, ${dish.price}, ${dish.image_url})
    `;
  } catch (error) {
    // If an error occurs during insertion, log the error and throw it
    console.error('Error inserting menu item:', error);
    throw error;
  }
};

/**
 * Fetch dishes from the database based on the provided week number and day of the week.
 * @param {Object} sql - The SQL template tag for querying the database.
 * @param {number} weekNumber - The week number to filter dishes.
 * @param {string} dayOfWeek - The day of the week to filter dishes.
 * @returns {Promise<Array>} - A promise that resolves to an array of fetched dishes.
 * @throws {Error} - Throws an error if the fetching process fails.
 */
const fetchDishesByWeekAndDay = async (sql, weekNumber, dayOfWeek) => {
  try {
    // Fetch dishes from the Dishes table based on week number and day of the week
    const dishes = await sql`
      SELECT * FROM Dishes
      WHERE week_number >= ${weekNumber}
        AND (week_number > ${weekNumber} OR day_of_week >= ${dayOfWeek})
    `;

    return dishes; // Return the fetched dishes
  } catch (error) {
    // If an error occurs during fetching, log the error and throw it
    console.error('Error fetching dishes:', error);
    throw error;
  }
};

/**
 * Fetch a menu item by its dish_id.
 * @param {number} id - The dish_id of the menu item to fetch.
 * @param {Object} sql - The SQL template tag for querying the database.
 * @returns {Promise<Object>} - A promise that resolves to the fetched menu item.
 * @throws {Error} - Throws an error if the fetching process fails.
 */
const fetchMenuItemById = async (id, sql) => {
  try {
    const menuItem = await sql`
      SELECT * FROM Dishes
      WHERE dish_id = ${id}
    `;
    return menuItem;
  } catch (error) {
    console.error('Error fetching menu item:', error);
    throw error;
  }
};

/**
 * Update a menu item by its dish_id.
 * @param {number} id - The dish_id of the menu item to update.
 * @param {string} dish_name - The updated dish name.
 * @param {string} description - The updated description.
 * @param {number} price - The updated price.
 * @param {string} image_url - The updated image URL.
 * @param {Object} sql - The SQL template tag for querying the database.
 * @throws {Error} - Throws an error if the update process fails.
 */
const updateMenuItemById = async (id, dish_name, description, price, image_url, sql) => {
  try {
    await sql`
      UPDATE Dishes
      SET dish_name = ${dish_name},
          description = ${description},
          price = ${price},
          image_url = ${image_url}
      WHERE dish_id = ${id}
    `;
  } catch (error) {
    console.error('Error updating menu item:', error);
    throw error;
  }
};

// Export the utility functions for external use
module.exports = {
  insertMenuItem,
  fetchDishesByWeekAndDay,
  fetchMenuItemById,
  updateMenuItemById,
};
