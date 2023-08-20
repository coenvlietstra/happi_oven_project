// Load environment variables from .env file
require('dotenv').config();

// Destructure the required environment variables
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

// Create the DATABASE_URL using the environment variables
const DATABASE_URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

// Export the DATABASE_URL for use in other modules
module.exports = {
  DATABASE_URL,
};
