const express = require("express");
const { loginPage, authenticate } = require('../controller/userController.js');

const router = express.Router();

// Rute untuk halaman login
router.get('/', loginPage);

// Rute untuk autentikasi
router.post('/auth', authenticate);

module.exports = router;
