const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
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
    courses_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courses'
    }

}, { timestamps: true })

const Student = new mongoose.model('students',studentSchema);
module.exports = Student;