const express = require('express');
const router = express.Router();
const db = require('../data/db-connect');
const authentication = require('./authentication');

const passport = require('passport');
const passportService = require('../auth/services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });

router.get('/', (req, res, next) => {
	console.log('there is the test');
});

router.get('/users', requireAuth, (req, res) => {
	db.any('SELECT * FROM users')
		.then(data => res.json(data))
		.catch(error => res.json({ error: error.message }));
});

router.use('/users', authentication);

module.exports = router;
