const User = require('../models/user.js');

exports.loginPage = (req, res) => {
    res.render('login/login', { layout: false });
};

exports.forgetPass = (req, res) => {
    res.render('login/forgetPass', { layout: false })
}

exports.recoverPass = (req, res) => {
    res.render('login/recoverPass', { layout: false })
}

