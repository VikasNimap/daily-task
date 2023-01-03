const mongoose = require('mongoose')
// const { stringify } = require('querystring')
var schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        isDeleted: { type: Boolean, defaults: 1 }
    },
    email:{
        type: String,
        unique:true

    },
    password:{
        type: String,
    }

},{timestamps:true})

const Userdb = mongoose.model('userdb', schema)

module.exports = Userdb;