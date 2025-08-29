const Order=require("../models/Order")


const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id })
      .populate({
        path: 'showId',
        populate: { path: 'title' } // ✅ Populate the movie document inside show
      })
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const getOrdersById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate({
        path: 'showId',
        populate: [
          { path: 'title' },     // Movie title
          { path: 'theatre' }    // Theatre inside show
        ]
      });

    if (!order) return res.status(404).json({ error: 'Order not found' });

    res.json(order);
  } catch (err) {
    console.error('Error in getOrdersById:', err);
    res.status(500).json({ error: err.message });
  }
};


const postOrders=async (req, res) => {
  const { showId, seats,totalAmtWithTax, paymentMethod } = req.body;

  if (!showId || !seats || !totalAmtWithTax || !paymentMethod) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const newOrder = new Order({
      userId: req.user.id,
      showId,
      seats,
      totalAmtWithTax,
      paymentMethod
    });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


module.exports={getOrders,getOrdersById,postOrders}