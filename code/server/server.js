// Import required modules
const express = require('express');
const { sql } = require('./database/connection');
const { configureRoutes } = require('./routes/routes');
const { getPgVersion } = require('./utils/test_deb');
const { calculateWeekAndDay } = require('./utils/dateCalculation');


const app = express();

// Define the port number to listen on
const port = process.env.PORT;

// Set up middleware to parse JSON requests
app.use(express.json());

// Middleware to attach the SQL connection to the request object
app.use((req, res, next) => {
  req.sql = sql;
  next();
});

// Middleware for handling errors
app.use((err, req, res, next) => {
  // Log the error
  console.error(err);

  // Send a 500 Internal Server Error response to the client
  res.status(500).json({ message: 'Internal server error' });
});

// Configure routes using the provided middleware
configureRoutes(app);

// Start the server and store the server instance
const server = app.listen(port, async () => {
  // Get and display the PostgreSQL version
  getPgVersion(sql);

  console.log(calculateWeekAndDay('2024-09-28'));

  console.log(`Server is running on port ${port}`);
});

// Gracefully handle SIGINT (Ctrl+C) signals
process.on('SIGINT', async () => {
  console.log('Shutting down...');

  // End the SQL connection
  await sql.end();

  // Close the server and exit the process
  server.close(() => {
    console.log('Server is gracefully closed');
    process.exit(0);
  });
});
