const User = require('../models/User');
const passport = require('passport');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, username: email, password });
    try {
        await newUser.save();
        res.redirect('/login');
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.login = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
});

exports.logout = (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
};
