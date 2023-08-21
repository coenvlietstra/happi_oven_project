// Define a function to get and log the PostgreSQL version
/**
 * Retrieve the PostgreSQL version and log it to the console.
 * @param {Object} sql - The SQL object used for database queries.
 */
async function getPgVersion(sql) {
  try {
    // Execute the query to retrieve the PostgreSQL version
    const result = await sql`SELECT version()`;
    
    // Log the retrieved PostgreSQL version to the console
    console.log(result);
  } catch (error) {
    // If an error occurs, log an error message along with the error details
    console.error('Error getting PostgreSQL version:', error);
  }
}

// Export the getPgVersion function for external use
module.exports = {
  getPgVersion,
};
