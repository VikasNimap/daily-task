const model = require('../models/studentsModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.middleWare = async(req,res,next)=>{
    const token = req.headers.token;
    const decode =  jwt.verify(token,"Vikash");
    const response = await model.findOne({email:decode})
    const result = await bcrypt.compare(password,response.password);
    
}