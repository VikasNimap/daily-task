const { default: mongoose } = require('mongoose');
const mongooes = require('mongoose');

const mainCaegorySchema = new mongooes.Schema({
    image: {
        type: String
    },
    subCategories: {
        type: Array
    },
    type: {
        type: String
    },
    title: {
        type: String
    },
    image_id: {
        type: String
    }
},
{timestamps:true})

const MainCategory = mongoose.model("mainCategories",mainCaegorySchema);
module.exports = MainCategory;