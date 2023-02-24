const db = require('../models/index');
const user_roles = db.user_roles;

exports.createUser_roles = async(req,res)=>{
    try {
        const data = req.body;
        const response = await user_roles.create(data);
        res.send({result:response}); 
    } catch (error) {
        res.send({result:`${error}`});
    }
}