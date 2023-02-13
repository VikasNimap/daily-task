const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    }
})

const Users = mongoose.model("users",userSchema);
module.exports = Users;