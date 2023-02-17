const db = require('../models/index');
const users = db.users;
const passport = require('passport');
const { initializingPassport } = require('../passportConfig');

initializingPassport(passport);
exports.createUser = async(req,res)=>{
    const data = req.body;
    const exists = await users.findOne({where:{email:data.email}});
    if(exists){return res.status(400).send({result:`user already exists`})}
    const response = await users.create(data);
    return res.status(201).send({result:response});
}

exports.login = async(req,res)=>{
    const {username,password} = req.body;
    const response = await users.findOne({where:{username:username}});
    res.send({result:response})
}