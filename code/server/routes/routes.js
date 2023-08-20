// Import the version 1 (v1) routes module
const v1Routes = require('./v1');

// Define a function to configure routes for the app
const configureRoutes = (app) => {
  // Use the version 1 (v1) routes under the '/api/v1' prefix
  app.use('/api/v1', v1Routes);
};

// Export the configureRoutes function for use in other modules
module.exports = {
  configureRoutes,
};
