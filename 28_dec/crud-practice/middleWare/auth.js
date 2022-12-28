const db = require('../models/index');
const jwt = require('jsonwebtoken');

exports.middleWare = async(req,res,next)=>{
    try{
        const token = req.headers.token;
        if(!token){
            return res.send('Please Enter Token');
        }
        const decode = jwt.decode(token,"Vikash");
        const response = await db.employees.findOne({where:{email:decode.email}});
        if(!response){
            return res.send(`User is not valid`)
        }
        next()
    }
    catch(err){
        console.log(err);
    }
}