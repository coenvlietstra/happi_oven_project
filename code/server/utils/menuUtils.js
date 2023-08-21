// Function to insert a menu item into the database
const insertMenuItem = async (weekNumber, dayOfWeek, dish, sql) => {
    try {
      await sql`
        INSERT INTO Dishes (week_number, day_of_week, dish_name, description, price, image_url)
        VALUES (${weekNumber}, ${dayOfWeek}, ${dish.dish_name}, ${dish.description}, ${dish.price}, ${dish.image_url})
      `;
    } catch (error) {
      console.error('Error inserting menu item:', error);
      throw error;
    }
  };

const fetchDishesByWeekAndDay = async (sql, weekNumber, dayOfWeek) => {
    try {
      const dishes = await sql`
        SELECT * FROM Dishes
        WHERE week_number >= ${weekNumber}
          AND (week_number > ${weekNumber} OR day_of_week >= ${dayOfWeek})
      `;
  
      return dishes;
    } catch (error) {
      console.error('Error fetching dishes:', error);
      throw error;
    }
  };

module.exports = {
    insertMenuItem,
    fetchDishesByWeekAndDay
}