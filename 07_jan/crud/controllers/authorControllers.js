const model = require('../models/authorModel');
const mongoose = require('mongoose');

exports.createAuthor = async(req,res)=>{
    const response = await model.create(req.body);
    res.send({result:response});
}
exports.getAuthor = async(req,res)=>{
    const page = req.params.id;
    const response = await model.find().populate("book_id").skip(3*(page-1)).limit(2);
    res.send({result:response});
}
exports.updateAuthor = async(req,res)=>{
    const userId = req.params.id;
    const data = req.body;
    const response = await model.findByIdAndUpdate({_id:userId},data);
    res.send({result:response});
}