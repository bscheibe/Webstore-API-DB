const User = require('../../model/user'),
JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt,
mongoose = require('mongoose');

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret
};

// Setting up JWT login strategy
exports.Login = new JwtStrategy(jwtOptions, function (payload, done) {
  let id = new mongoose.Types.ObjectId(payload._id);
    User.findById(id, function(err, user) {
        if (err) { return done(err, false); }
    
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      });
    
});