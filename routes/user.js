var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const RegisterUser = require('../userModel')

router.get('/', async (req, res) => {
    const users = await RegisterUser.find();
    if (!users) {
        res.json('Error in fetching users.')
    } else {
        res.json(users)
    }
})

router.post('/', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            shippingAddress,
            password,
        } = req.body
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new RegisterUser({
            firstName,
            lastName,
            shippingAddress,
            email,
            password: passwordHash,
        });

        const createUser = await newUser.save();
        if (!createUser) {
            res.json('Error occured while registring user.')
        } else {
            res.json(`User registerd sucessfully..|| ${createUser}`)
        }
    } catch (err) {
        res.json(err)
    }
});

module.exports = router;
