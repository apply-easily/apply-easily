const express = require('express');
const passport = require('passport');
const router = express.Router();

const Authentication = require('../auth/controllers/authentication');

const requireSignIn = passport.authenticate('local', { session: false });

router.get('/sign-up', (req, res) => {
	res.render('authentication/sign-up');
});

router.post('/sign-up', Authentication.signup);

router.get('/sign-in', (req, res) => {
	res.render('authentication/sign-in');
});

router.post('sign-in', requireSignIn, Authentication.signin);

module.exports = router;
