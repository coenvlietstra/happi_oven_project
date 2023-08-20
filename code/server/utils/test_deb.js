// Define a function to get and log the PostgreSQL version
async function getPgVersion(sql) {
  try {
    // Execute the query to retrieve the PostgreSQL version
    const result = await sql`SELECT version()`;
    console.log(result);
  } catch (error) {
    console.error('Error getting PostgreSQL version:', error);
  }
}

// Export the function for external use
module.exports = {
  getPgVersion,
};
