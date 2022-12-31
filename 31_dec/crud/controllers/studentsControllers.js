const db = require('../models/index');
const students = db.students;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.create = async(req,res)=>{
    const data = req.body;
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password,salt);
    const response = await students.create(data);
    res.send({result:response});
}
exports.login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email){
            return res.send('please enter email and password.')
        }
        const response = await students.findOne({where:{email:email}});
        if(email !=response.email){
            return res.send('email id is not valid');
        }
        const result = await bcrypt.compare(password,response.password);
        if(result){
            const token = jwt.sign(response.email,"Vikash");
            res.send({result:token});
        }
    }
    catch(err){
        return res.send(`error ${err}`)
    }
}
exports.get = async(req,res)=>{
    try{
        const userId = req.student;
        const response = await students.findOne({where:{id:userId.id}},{
            // attributes:{exculde:['id','createdAt','updatedAt','deletedAt']},
             include:{model:db.courses,
             attributes:['cname','email','duration']
            }
        });
        res.send({result:response});
    }
    catch(err){
        return res.send(`err ${err}`)
    }
}
exports.update = async(req,res)=>{
    const userId = req.student;
    console.log(userId);
    const data = req.body;
    const response = await students.update(data,{where:{id:userId.id}});
    res.send({result:response});
}