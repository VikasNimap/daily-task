const db = require('../models/index');
const jwt = require('jsonwebtoken');

exports.middleWare = async(req,res,next)=>{
    try{
        const token = req.headers.token;
        if(!token){
            return res.send(`Please enter token...`)
        }
       const decode = await jwt.decode(token,"Vikash");
       const response = await db.students.findOne({where:{email:decode}});
       req.student = response.dataValues
        next()
    }
    catch(err){
        console.log(err);
    }
}