const mongoose = require('mongoose');
const { schema } = require('./userSchema');

const productSchema = new mongoose.Schema({
    pname: {
        type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories"
    }
})
const Products = mongoose.model("products",productSchema);
module.exports = Products;