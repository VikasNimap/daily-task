const db = require('../models/index');
const path = require('path');
exports.createUser = async(req,res)=>{
    const data = req.body;
    let a = req.file.path.replace('public',"");
    console.log(a);
    data.picture = 'http://127.0.0.1:3000'+a
    let response = await db.users.create(data);
    res.send(response);
    
}