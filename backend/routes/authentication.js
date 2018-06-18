const express = require('express');
const passport = require('passport');
const router = express.Router();

const Authentication = require('../auth/controllers/authentication');

const requireSignIn = passport.authenticate('local', { session: false });

//This route Will render sign-up page
router.get('/sign-up', (req, res) => {
	res.render('authentication/sign-up');
});

//Create new user
router.post('/sign-up', Authentication.signup);

//This route Will render sign-in page
router.get('/sign-in', (req, res) => {
	res.render('authentication/sign-in');
});

//User login
router.post('/sign-in', requireSignIn, Authentication.signin);

module.exports = router;
