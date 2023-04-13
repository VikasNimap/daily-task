const db = require('../models/userModel');

exports.createUser = async(req,res)=>{
    const data = req.body;
    const response = await db.create(data);
    res.send(response)
}