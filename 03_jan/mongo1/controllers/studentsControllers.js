const models = require('../models/studentsModel');
const jwt = require('jsonwebtoken');
exports.createStudents = async(req,res)=>{
    try{
        const response = await models.create(req.body);
        res.send(/* for specific response to client*/{name:response.name,email:response.email});
    }
    catch(err){
        console.log(err);
    }
}
exports.getStudents = async(req,res)=>{
    try{
        const response = await models.find();
        res.send({result:response});
    }
    catch(err){
        return console.log(err);
    }
}
exports.updateStudents = async(req,res)=>{
    try{
        const userId = req.params.id;
        const data = req.body;
        const response  = await models.findOneAndUpdate({_id:userId},data,{new:true});
        res.send({result:response});
    }
    catch(err){
       return console.log(err);
    }
}
exports.deleteStudents = async(req,res)=>{
    try{
        const userId  = req.params.id;
        const response = await models.deleteOne({_id:userId})
        res.send({result:response})
    }
    catch(err){
      return  console.log(err);
    }
}

//login
// exports.login = async(req,res)=>{
//     try{
//         const {email,password} = req.body;
//         if(!email){
//             return res.send(`please enter valid email and password`);
//         }
//         const response = await models.find({email:email})
//         const token = jwt.sign({email:response.email},"Vikash");
//         res.send({result:token})
//     }
//     catch(err){
//         return res.send(`err ${err}`);
//     }
// }
// exports.getYourData = async(req,res)=>{
//     res.send('ok')
// }