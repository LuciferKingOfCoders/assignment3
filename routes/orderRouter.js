const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');

// Get user's orders
router.get('/:userId', async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const orders = await Order.find({ user: userId }).populate('products.product');
        res.json(orders);
    } catch (error) {
        next(error);
    }
});


module.exports = router;