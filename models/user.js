const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name must be specified.'],
        trim: true,
        minlength: [5, 'name must be minimum 5 chars.'],
        maxlength: [15, 'name must be maximum 15 chars.']
    },
    email: {
        type: String,
        // validate: function (email) {

        // }
        required: [true, 'email must be specified.'],
        unique: true,
        trim: true,
        minlength: [15, 'email must be minimum 15 chars.'],
        maxlength: [50, 'email must be maximum 50 chars.']
    },
    gender: {
        type: String,
        required: [true, 'gender is required'],
        enum: {
            values: ['Male', 'Female', 'Other'],
            message: 'This gender does not exist'
        }
    },
    rating: {
        type: Number,
        required: [true, 'rating is required.'],
        validate: {
            validator: function (value) {
                return value >= 3 && value <= 10
            },
            message: 'Rating must be in between 3 & 10'
        },
    }
}, { timestamps: true })

const user = mongoose.model('user', userSchema);
module.exports = user;