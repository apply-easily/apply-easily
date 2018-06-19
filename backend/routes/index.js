const express = require('express');
const router = express.Router();
const db = require('../data/db-connect');
const passport = require('passport');
const passportService = require('../auth/services/passport');
const authentication = require('./authentication');

const requireAuth = passport.authenticate('jwt', { session: false });

//Testing route for getting console.log
router.get('/', (req, res, next) => {
	console.log('there is the test');
});

//Testing route for getting all list of users if user autorized. Doesn't work now
router.get('/users', requireAuth, (req, res) => {
	console.log(req.headers);
	db.any('SELECT * FROM users')
		.then(data => res.json(data))
		.catch(error => res.json({ error: error.message }));
});

router.use('/users', authentication);

module.exports = router;
