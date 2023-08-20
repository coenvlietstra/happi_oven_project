// Import the required module for PostgreSQL connections
const postgres = require('postgres');

// Import the DATABASE_URL from the database configuration
const { DATABASE_URL } = require('../config/database');

// Create the SQL connection object using the DATABASE_URL
const sql = postgres(DATABASE_URL, { ssl: 'require' });

// Export the SQL connection object for use in other modules
module.exports = {
  sql,
};
