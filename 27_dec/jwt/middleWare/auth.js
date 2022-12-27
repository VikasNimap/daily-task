const db = require('../models/index');
const jwt = require('jsonwebtoken');

exports.middleWare = async(req,res,next)=>{
    try{
        const token = req.headers.token;
        if(!token){
            return res.send('enter token')
        }
        const decode = jwt.decode(token,"Vikash");
        const response = await db.employees.findOne({where:{email:decode}})
        console.log(response);
        if(req.params.id != response.id){
            return res.send("user is not authorized")
        }
        next()
    }
    catch(err){
        console.log(err.message);
    }
}