const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controller');
const testController = require('../controllers/test-controller');

// DEFINE ROUTES -- START

router.get('/auth/google', authController.googleAuth);
router.get('/auth/google/callback', authController.googleCallback);
// Test routes
router.get('/', testController.testBase);
router.get('/test/register', testController.testRegister);
router.get('/test/login', testController.testLogin);
router.get('/test/google-auth', testController.testGoogleAuth);
// DEFINE ROUTES -- STOP

module.exports = router;
