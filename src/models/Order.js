const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  showId: { type: mongoose.Schema.Types.ObjectId, ref: 'Show', required: true },
  seats: [{ type: String, required: true }],
  totalAmtWithTax: Number,
  paymentMethod: { type: String, enum: ['gpay', 'phonepe', 'card', 'upi'], required: true },
  status: { type: String, default: 'Booked' },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
