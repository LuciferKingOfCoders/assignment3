var express = require('express');
var router = express.Router();
const Product = require('../productModel')

/* GET home page. */
router.get('/', async function (req, res, next) {
  const getAllProducts = await Product.find()
  if (!getAllProducts) {
    res.json("There is some error in fetching products.")
  } else {
    res.status(200).json(getAllProducts)
  }
});

module.exports = router;
