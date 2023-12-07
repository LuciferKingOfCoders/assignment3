const express = require('express');
const router = express.Router();
const Cart = require('../models/cartModel');

// Get user's cart
router.get('/:userId', async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const cart = await Cart.findOne({ user: userId }).populate('products.product');
        res.json(cart);
    } catch (error) {
        next(error);
    }
});


module.exports = router;