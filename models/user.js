const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name must be minimum 5 chars.'],
        trim: true,
        minlength: [5, 'name must be minimum 5 chars.'],
        maxlength: [15, 'name must be maximum 15 chars.']
    },
    email: {
        type: String,
        required: [true, 'email must be specified.'],
        unique: true,
        trim: true,
        minlength: [15, 'email must be minimum 15 chars.'],
        maxlength: [50, 'email must be maximum 50 chars.']
    }
}, { timestamps: true })

const user = mongoose.model('user', userSchema);
module.exports = user;