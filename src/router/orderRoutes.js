const express = require('express');
const router = express.Router();
const { getOrders, getOrdersById, postOrders } = require("../controllers/orderController")
const verifyToken = require("../Middlewares/authMiddleware");

// Get all orders for a user
router.get('/my-orders', verifyToken, getOrders);

// Get a specific order by ID
router.get('/:id', verifyToken, getOrdersById);

// Create an order
router.post('/', verifyToken, postOrders); // ✅ Attach postOrders

module.exports = router;
