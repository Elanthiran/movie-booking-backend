const Movie = require("../models/itemModels");

const getMovies = async (req, res) => {
  const { city } = req.query;
  if (!city) return res.status(400).json({ message: "City is required" });

  // Simulate filtering movies by city using showtimes
  // (Replace with real logic based on showtimes/theaters)
  const movies = await Movie.find();
  res.json(movies);
};

const postMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const saved = await newMovie.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getMovies, postMovie };
