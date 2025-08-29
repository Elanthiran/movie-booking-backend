const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({
  name: { type: String, required: true },         // City
  theatre: { type: String, required: true },      // Theatre name
  seatConfig: {
  rows: [{ type: String }],
  cols: { type: Number }
}
});

module.exports = mongoose.model("Theatre", theatreSchema);
