const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "ABC"
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    locality: {
        type: String
    },
    p_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})
const Students = mongoose.model("users", studentSchema);
module.exports = Students;