const passport = require('passport');
const config = require('../config');
const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const { findUserById, verifyUser } = require('../actions/signIn');
const localStrategy = require('passport-local');
const bcrypt = require('bcrypt');

const localOptions = { usernameField: 'email' };

const localLogin = new localStrategy(localOptions, (email, password, done) => {
	return verifyUser(email).then(validUser => {
		bcrypt
			.compare(password, validUser.password)
			.then(validPassword => {
				if (validPassword) {
					return done(null, validUser);
				}
				return done(null, false);
			})
			.catch(err => donde(err, false));
	});
});

const jwtOptions = {
	jwtFromRequest: extractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

const jwtLogin = new jwtStrategy(jwtOptions, (payload, done) => {
	return findUserById(payload.sub)
		.then(foundUser => {
			if (foundUser) {
				return done(null, foundUser);
			}
			return done(null, false);
		})
		.catch(err => done(err, false));
});

passport.use(jwtLogin);
passport.use(localLogin);
