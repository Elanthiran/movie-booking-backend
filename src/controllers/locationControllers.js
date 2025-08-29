
const City = require("../models/locationModel");



const getCity = async (req, res) => {
  try {
    const cities = await City.find({});
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const postCity = async (req, res) => {
  try {
    const cities = req.body; // expecting array of city objects
    if (!Array.isArray(cities)) {
      return res.status(400).json({ error: "Request body should be an array of cities" });
    }
    const saved = await City.insertMany(cities);
    res.status(201).json({ message: "Cities saved", data: saved });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getCity, postCity };
