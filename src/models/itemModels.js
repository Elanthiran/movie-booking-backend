const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  trailerUrl: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  cast: [
    {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    }
  ]
}, {
  timestamps: true,
});

module.exports = mongoose.model("items", itemSchema);
