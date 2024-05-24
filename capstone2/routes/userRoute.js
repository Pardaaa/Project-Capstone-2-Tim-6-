const express = require("express");
const { loginPage, authenticate, forgetPass, recoverPass } = require('../controller/userController.js');

const router = express.Router();

// Rute untuk halaman login
router.get('/', loginPage);
router.get('/forgetPass', forgetPass)
router.get('/recoverPass', recoverPass)

module.exports = router;
