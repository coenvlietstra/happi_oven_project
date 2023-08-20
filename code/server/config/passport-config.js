const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = process.env;

// Initialize passport
passport.serializeUser((user, done) => {
   done(null, user);
});

passport.deserializeUser((user, done) => {
   done(null, user);
});

passport.use(new GoogleStrategy({
   clientID: GOOGLE_CLIENT_ID,
   clientSecret: GOOGLE_CLIENT_SECRET,
   callbackURL: 'http://localhost:8081/auth/google/callback',
   passReqToCallback: true
}, (accessToken, refreshToken, profile, done) => {
   // Here, you can access user's profile information from 'profile' parameter
   // Check if the user is already registered in your database
   // If not, create a new user entry
   // Call 'done' with the user object
}));

module.exports = passport;