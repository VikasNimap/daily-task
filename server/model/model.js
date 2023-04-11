const mongoose = require('mongoose')
// const { stringify } = require('querystring')
var schema = new mongoose.Schema({
    pId:{
        type: Number,
        required: true,
        unique: true
    },
    pname:{
        type: String,
        required: true
    },
    CategoryName:{
        type: String,

    },
    cId:{
        type: Number,
        unique: true
    }
})

const Userdb = mongoose.model('userdb', schema)

module.exports = Userdb;