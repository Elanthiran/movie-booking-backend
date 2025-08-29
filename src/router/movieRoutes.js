const express = require("express");
const { getMovies, postMovie } = require("../controllers/movieController");

const router = express.Router();

router.get("/movies", getMovies);
router.post("/movies", postMovie);

module.exports = router;
