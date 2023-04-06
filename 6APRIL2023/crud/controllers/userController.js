const db = require('../models/index');


exports.createUser = async(req,res)=>{
    const data = req.body;
    const response = await db.users.create(data);
    res.send(response)
}