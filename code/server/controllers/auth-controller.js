// auth-controller.js
const passport = require('passport');

// ...  

// Google authentication
exports.googleAuth = passport.authenticate('google', {
   scope: ['profile', 'email']
});

// Google authentication callback
exports.googleCallback = (req, res) => {
   passport.authenticate('google', (err, user, info) => {
      if (err) {
         return res.status(500).json({ message: 'Authentication error' });
      }
      if (!user) {
         return res.status(401).json({ message: 'Authentication failed' });
      }
      req.login(user, (err) => {
         if (err) {
            return res.status(500).json({ message: 'Login error' });
         }
         return res.redirect('/profile'); // Redirect to profile page after successful login
      });
   })(req, res);
};
