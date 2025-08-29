const express = require('express');
const router = express.Router();
const verifyToken=require("../Middlewares/authMiddleware")

const { getCity, postCity } = require('../controllers/locationControllers');

router.get('/city',verifyToken,getCity);
router.post('/city',verifyToken, postCity);

module.exports = router;
