// backend/routes/authRoutes.js
const express = require('express');

const { register, login, logout,googleLogin } = require('../controllers/authController');



const router = express.Router();

// Register
router.post('/register',register)

// Login
router.post('/login',login )

// Logout
router.post('/logout',logout )

router.post("/google", googleLogin);


module.exports = router;
