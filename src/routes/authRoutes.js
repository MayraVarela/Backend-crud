const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/register', authController.showRegistrationForm);
router.post('/register', authController.registerUser);

module.exports = router;