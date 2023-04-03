const mongoose = require('mongoose');

const registerUser = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    OTP: {
        type: String
    }
}, { timestamps: true })

const userRegistration = new mongoose.model("userRegistration", registerUser);
module.exports = userRegistration;