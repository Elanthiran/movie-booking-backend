const mongoose = require("mongoose");
const SeatLayout = require("../models/Seat");
const Show = require("../models/showTimeModel");
const Theatre = require("../models/theaterModel");

// Create seat layout
const createSeatLayout = async (req, res) => {
  try {
    const { showId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(showId)) {
      return res.status(400).json({ error: "Invalid showId" });
    }

    const show = await Show.findById(showId);
    if (!show) return res.status(404).json({ error: "Show not found" });

    const theatre = await Theatre.findById(show.theatre);
    if (!theatre) return res.status(404).json({ error: "Theatre not found" });

    const rows = (Array.isArray(theatre.seatConfig?.rows) && theatre.seatConfig.rows.length > 0)
      ? theatre.seatConfig.rows
      : ["A", "B", "C", "D", "E"];

    const cols = typeof theatre.seatConfig?.cols === "number" && theatre.seatConfig.cols > 0
      ? theatre.seatConfig.cols
      : 40;

    console.log("Using Rows:", rows);
    console.log("Using Cols:", cols);

    const layout = rows.map((row) => ({
      row,
      seats: Array.from({ length: cols }, (_, i) => ({
        id: `${row}${i + 1}`,
        status: "available",
      })),
    }));

    const existing = await SeatLayout.findOne({ showId });
    if (existing) return res.status(200).json({ layout: existing.layout });

    const newLayout = await SeatLayout.create({ showId, layout });
    res.status(201).json({ layout: newLayout.layout });
  } catch (err) {
    console.error("Error in createSeatLayout:", err);
    res.status(500).json({ error: "Failed to create layout" });
  }
};

// Get seat layout
const getSeatLayout = async (req, res) => {
  try {
    const { showId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(showId)) {
      return res.status(400).json({ error: "Invalid showId" });
    }

    const layoutDoc = await SeatLayout.findOne({ showId });
    if (!layoutDoc) return res.status(404).json({ error: "Layout not found" });

    if (req.query.bookedOnly === "true") {
      const booked = layoutDoc.layout.flatMap((row) =>
        row.seats.filter((s) => s.status === "booked").map((s) => s.id)
      );

      return res.json({
        seats: booked,
        totalPrice: booked.length * 150,
        message: "Booked seats summary",
      });
    }

    res.json({ layout: layoutDoc.layout });
  } catch (err) {
    console.error("Error in getSeatLayout:", err);
    res.status(500).json({ error: "Failed to get layout" });
  }
};

// Book seats
const bookSeats = async (req, res) => {
  try {
    const { showId } = req.params;
    const { selectedSeats } = req.body;

    const layoutDoc = await SeatLayout.findOne({ showId });
    if (!layoutDoc) return res.status(404).json({ error: "Layout not found" });

    layoutDoc.layout.forEach((row) => {
      row.seats.forEach((seat) => {
        if (selectedSeats.includes(seat.id) && seat.status === "available" ) {
          seat.status = "booked";
        }
      
      });
    });

    await layoutDoc.save();
    res.json({ message: "Seats booked", layout: layoutDoc.layout });
  } catch (err) {
    console.error("Error in bookSeats:", err);
    res.status(500).json({ error: "Failed to book seats" });
  }
};

module.exports = {
  createSeatLayout,
  getSeatLayout,
  bookSeats,
};
