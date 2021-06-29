// Dependencies:
const passport = require("passport");
const passportJWT = require("passport-jwt");
const regeneratorRuntime = require("regenerator-runtime");

// Get Extract and Strategy:
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "DcyIO>+;k?re$goz'%<!NOs>Mg['s"
}, async (jwtPayload, cb) => {
  try {
    return jwtPayload;
  } catch (e) {
    return cb(e);
  }
}));