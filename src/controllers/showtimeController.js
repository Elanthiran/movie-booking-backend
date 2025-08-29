const Show = require("../models/showTimeModel");

// Create a new show
const postShow = async (req, res) => {
  try {
    const newShow = new Show(req.body);
    const savedShow = await newShow.save();
    res.status(201).json(savedShow);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all shows with populated theatre and movie details
const getShow = async (req, res) => {
  try {
    const shows = await Show.find({})
      .populate({
        path: 'theatre',
        select: 'name theatre' // 'name' is the city, 'theatre' is the theatre name
      })
      .populate({
        path: 'title',
        select: 'title image releaseDate' // Optional movie info
      });

    res.json(shows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getShow, postShow };
