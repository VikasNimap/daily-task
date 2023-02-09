const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    pname: {
        type: String,
    },
    price: {
        type: Number
    }
})
const products = mongoose.model("products", productSchema);
module.exports = products;