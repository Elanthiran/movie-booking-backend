const express = require('express');
const router = express.Router();
const {getTheatre,postTheatre}=require("../controllers/theatreController")
const verifyToken=require("../Middlewares/authMiddleware")
const authorizeRoles=require("../Middlewares/roleMiddleware")
// GET /api/theatres?city=CityName
router.get('/theatres',verifyToken,getTheatre);
router.post('/theatres',verifyToken, authorizeRoles('admin'),postTheatre)

module.exports = router;
