const models = require('../models/studentsModel');
const jwt = require('jsonwebtoken');

exports.middleWare = async(req,res,next)=>{
    const token = req.headers.token;
    if(!token){
        return res.send(`please enter token`)
    }
    const decode = jwt.decode(token,"Vikash");
    const response = await models.find({email:decode.email});
    console.log(req);
    if(!response){
        return res.send(`user is not valid.`)
    }
    // console.log(response.email);
    // req. = response
    next()
}