const db = require('../models/index');
const jwt = require('jsonwebtoken');

exports.middleWare = async(req,res,next)=>{
    try{
        const token = req.headers.token;
        if(!token){
            return res.send(`Enter Token`);
        }
        const decode =  jwt.decode(token,"Vikash");
        const response = await db.students.findOne({where:{email:decode}});
        // if(req.params.id != response.id){
        //    return res.send(`user is not valid`)
        // }
        req.student=response
        next()

    }
    catch(err){
        console.log(err);
    }
}