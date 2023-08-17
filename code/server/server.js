const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set up middleware
app.use(express.json());

// Initialize Passport.js for authentication
const passport = require('passport');
app.use(passport.initialize());

// Load passport strategies and authentication middleware
require('./middleware/authMiddleware')(passport);

// Set up routes
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
