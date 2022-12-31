const db = require('../models/index');
const jwt = require('jsonwebtoken');

exports.middleWare = async(req,res,next)=>{
    try{
        const token = req.headers.token;
        if(!token){
            return res.send(`please enter token`);
        }
        const decode = jwt.decode(token,"Vikash");
        const response = await db.students.findOne({where:{email:decode}});
        req.student = response
        next()

    }
    catch(err){
        return res.send(`err ${err}`);
    }
}