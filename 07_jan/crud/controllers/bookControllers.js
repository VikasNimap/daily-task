const model = require('../models/bookModel');
const mongoose = require('mongoose');

exports.createBook = async(req,res)=>{
    const response = await model.create(req.body);
    res.send({result:response});
}
exports.getBook = async(req,res)=>{
    const page = req.params.page;
    const response = await model.aggregate([
        {
        $group:{_id:`$name`,totalNumberOfPages:{$sum:`$year`}}
        },
        {
        $sort:{totalNumberOfPages:-1
        }}])
        
    
    //.populate("author_id").skip(3*(page-1)).limit(1);
    res.send({result:response});
}