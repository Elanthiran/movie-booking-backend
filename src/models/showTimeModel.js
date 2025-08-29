const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  screen: { type: String, required: true },
  price: { type: Number, required: true },
  theatre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Theatre",
    required: true,
  },
  title: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "items", // Assuming items is the Movie model
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Show", showSchema);
