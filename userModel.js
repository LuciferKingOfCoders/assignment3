const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        firstName: {
            type: String,
            min: 3
        },
        lastName: {
            type: String,
            required: true,
            min: 3,
        },
        email: {
            type: String,
            required: true,
        },
        shippingAddress: {
            type: String,
        },
        password: {
            type: String,
            required: true,
            min: 8
        },
        purchaseHistory: []
    },
);
module.exports = mongoose.model('users', UserSchema);


