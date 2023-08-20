const express = require('express');
const app = express();
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID} = process.env;
const passport = require('./config/passport-config');
const v1Routes = require('./routes/v1');
const testController = require('./controllers/test-controller');

// DATABASE CONNECTION -- START
const postgres = require('postgres');
require('dotenv').config();

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

const sql = postgres(URL, { ssl: 'require' });
// DATABASE CONNECTION -- END

const port = process.env.PORT;

// Set up middleware
app.use(express.json());

//SETUP ROUTES -- START
app.use('/api/v1', v1Routes);
app.get('/', testController.testBase);
//SETUP ROUTES -- END

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
