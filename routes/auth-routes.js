const router = require("express").Router();
const passport = require('passport');

//auth login
router.get('/login', (req, res) => {
    res.render('login');
});

//auth logout
router.get('/logout', (req, res) => {
    //handle with passport
    req.logout();
    res.redirect('/');
});

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
router.get('/google/redirect', (req, res) => {
    res.render('profile');
});

module.exports = router;
