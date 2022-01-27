const passport = require("passport");
const User = require("../controllers/models/user");
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    return done(null, user);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    function (username, password, done) {
      console.log(username + "__" + password + "passport.js");
      User.findOne({
        email: username,
      }).then(async (account) => {
        let passCheck;
        if (account) {
          passCheck = await User.comparePassword(password, username);
        }
        // if the query was good but the username passed in was not in our account model stop and return this
        if (!account) {
          return done(null, false);
        }
        // if the query was good but the password passed in did not match the username stop and return this
        else if (passCheck == false) {
          return done(null, false);
        } else {
          return done(null, account);
        }
      });
    }
  )
);
module.exports = passport;
