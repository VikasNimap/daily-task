const db = require('../models/index');
const users = db.users;

exports.createUsers = async(req,res)=>{
    const data = req.body;
    const response = await users.create(data);
    res.send({result:response});
}
exports.getUsers = async(req,res)=>{
    const response = await users.findAll({
        attributes: {
            exclude: ['id','createdAt', 'updatedAt']
        },
        include: {
            model: db.posts,
           attributes: ['contentType']
        }
    });
    res.send({result:response});
}