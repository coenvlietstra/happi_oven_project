// Test route for registration
exports.testRegister = (req, res) => {
    res.json({ message: 'Test registration route is working' });
 };
 
 // Test route for login
 exports.testLogin = (req, res) => {
    res.json({ message: 'Test login route is working' });
 };
 
 // Test route for Google authentication
 exports.testGoogleAuth = (req, res) => {
    res.json({ message: 'Test Google authentication route is working' });
 };
 
 // Test route for the base entry point
exports.testBase = (req, res) => {
    res.json({ message: 'Server base entry point is working' });
 };