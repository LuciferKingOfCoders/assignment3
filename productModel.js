const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        productId: {
            type: String
        },
        productName: {
            type: String,
            required: true,
            min: 3,
        },
        price: {
            type: Number,
            required: true,
            min: 10
        },
        shippingPrice: {
            type: Number,

        },
        description: {
            type: String,
            required: true
        }
    },
);
module.exports = mongoose.model('products', ProductSchema);


