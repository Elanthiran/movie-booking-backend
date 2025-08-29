const mongoose = require("mongoose");

const seatLayoutSchema = new mongoose.Schema({
  showId: { type: mongoose.Schema.Types.ObjectId, ref: "Show" },
  layout: [
    {
      row: String,
      seats: [
        {
          id: String,
          status: { type: String, enum: ["available", "booked"], default: "available" }
        }
      ]
    }
  ]
});

module.exports = mongoose.model("SeatLayout", seatLayoutSchema);
