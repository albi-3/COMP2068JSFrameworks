const LocalStrategy = require('passport-local').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = function (passport) {
  //  Local Strategy
  passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }));

  // GitHub Strategy
  passport.use(new GitHubStrategy({
    clientID: 'Ov23liEdFILDiFgam32w',
    clientSecret: 'de11526f390018823133c09f7b71ead03be8d31d',
    callbackURL: '/auth/github/callback'
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ githubId: profile.id });

      if (!user) {
        user = await User.create({
          githubId: profile.id,
          username: profile.username
        });
      }

      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }));

  //  Session Serialize
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  //  Session Deserialize (FIXED with async/await)
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id); // no callback used here
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};
