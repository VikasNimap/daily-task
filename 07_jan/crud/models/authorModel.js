const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    book_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book'
    },
    email: {
        type: String,
        required: true
    }
//dfvdfvfdffb
},{timestamps:true})
//jefiefpgifmpfikg

const Author = new mongoose.model("Author",authorSchema);
module.exports = Author;
