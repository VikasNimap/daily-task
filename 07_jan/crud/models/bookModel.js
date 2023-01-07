const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
}, { timestamps: true })

const Book = new mongoose.model('Book',bookSchema);
module.exports = Book;