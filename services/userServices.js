const db = require('../models/index');
const bcrypt = require('bcrypt');








exports.createUser = async(data)=>{
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password,salt);
    console.log(data.password);
    const response = await db.users.create(data);
    return response
}

//pagination
exports.getUsers = async(limit,offset)=>{
    const response = await db.users.findAll({limit:(limit)||10,offset:(limit*(offset-1))||0})//.limit(limit).offset(offset);
    return response
}