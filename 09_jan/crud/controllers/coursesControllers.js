const model = require('../models/coursesModel');
const bcrypt = require('bcrypt');

exports.createCourses = async(req,res)=>{
    const data = req.body;
    if(data.role==="admin"){
        const response = await model.create(data);
        res.send({result:response});
    }
    else{
        console.log('user tried to add course');
        res.send(`permission denied`)
    }
}
exports.getCourses = async(req,res)=>{
    const role = req.params.role;
    if(role==="admin"){
        const response = await model.find();
        res.send({result:response});
    }
}
exports.updateCourses = async(req,res)=>{
    const userId = req.params.id;
    const role = req.params.role;
    if(role==="admin"){
        const data = req.body;
        const response = await model.findByIdAndUpdate({_id:userId},data);
      return  res.send({result:response});
    }
    else{
        return res.send(`cannot update`)
    }
}
exports.deleteCourses = async(req,res)=>{
    const userId = req.params.id;
    const role = req.params.role;
    if(role==="admin"){
        const response = await model.findByIdAndDelete({_id:userId});
        return res.send({result:response});
    }
}