const express = require("express");
const router = express.Router();
const { createSeatLayout, getSeatLayout, bookSeats } = require("../controllers/seatController");
const verifyToken=require("../Middlewares/authMiddleware")

router.post("/createSeatLayout",verifyToken, createSeatLayout);
router.get("/:showId",verifyToken, getSeatLayout);
router.post("/book/:showId",verifyToken, bookSeats);

module.exports = router;
