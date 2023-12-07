const express = require('express');
const router = express.Router();
const Comment = require('../models/commentModel');


router.get('/', async (req, res, next) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        next(error);
    }
});

module.exports = router;