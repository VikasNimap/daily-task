const db = require('../models/index');
const posts = db.posts;

exports.createPosts = async(req,res)=>{
    const data = req.body;
    const response = await posts.create(data);
    res.send({result:response});
}