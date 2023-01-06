const model = require('../models/coursesModel');

exports.createCourses = async(req,res)=>{
    try{
        const response = await model.create(req.body);
        res.send(/* for specific response to client*/{result:response});
    }
    catch(err){
        console.log(err);
    }
}
exports.getCourses = async(req,res)=>{
    try{
        const page=req.params.page
        const response = await model.find().populate('students_id').skip(3*(page-1)).limit(3).select({_id:0});
        res.send(/* for specific response to client*/{result:response});
    }
    catch(err){
        console.log(err);
    }
}
exports.update = async(req,res)=>{
    try{
        const userId = req.params.id;
        const stud = req.body;
        const response = await model.findOneAndUpdate({_id:userId},{$push:{students:stud}},{new:true});
        res.send(/* for specific response to client*/{result:response});
    }
    catch(err){
        console.log(err);
    }
}