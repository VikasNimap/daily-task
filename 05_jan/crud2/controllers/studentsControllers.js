const model = require('../models/studentsModel');

exports.createStudents = async(req,res)=>{
    try{
        const response = await model.create(req.body);
        res.send(/* for specific response to client*/{result:response});
    }
    catch(err){
        console.log(err);
    }
}
exports.getStudents = async(req,res)=>{
    try{
        const response = await model.find();
        res.send(/* for specific response to client*/{result:response});
    }
    catch(err){
        console.log(err);
    }
}