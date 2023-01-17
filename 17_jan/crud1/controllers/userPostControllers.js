const db = require('../models/index');
const userPost = db.userPosts;

exports.createUserPosts = async(req,res)=>{
    const data = req.body;
    const response = await userPost.create(data);
    res.send({result:response});
}
exports.getUserPosts = async(req,res)=>{
    const response = await userPost.findAll({
        
            
        
    });
    res.send({result:response});
}