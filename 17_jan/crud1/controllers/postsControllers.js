const db = require('../models/index');
const posts = db.posts;

exports.createPost = async(req,res)=>{
    const data = req.body;
    const response = await posts.create(data);
    res.send({result:response});
}
exports.getPost = async(req,res)=>{
    const response = await posts.findAll({
        
            attributes: {
                exclude: ['id','createdAt', 'updatedAt']
            },
            include: {
                model: db.users,
               attributes: ['name','locality']
            }
        
    });
    res.send({result:response});
}