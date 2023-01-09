const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema({
    cname: {
        type: String,
        required: true,
        unique: true
    },
    duration: {
        type: Number,
        required: true,
    },
    role: {
        type:String,
        default: "user"
    }
}, { timestamps: true });

const Course = new mongoose.model('courses',coursesSchema);
module.exports = Course;