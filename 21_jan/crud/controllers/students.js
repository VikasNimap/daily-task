const db = require('../models/index');
const students = db.students;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.createStudents = async (req, res) => {
    const data = req.body;
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    const response = await students.create(data);
    res.send({ result: {} })
}

exports.login = async (req, res,next) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!(email && password)) {
        res.send(`please enter valid email & password.`)
    }
    else if (email && password) {
        const response = await students.findOne({ where: { email: email } })
        data = response.id
        if (!response) {
            res.send(`cannot find data, please enter valid email and password`);
        }
        else {
            const token = await jwt.sign(response.email,"Vikash",);
            const decrypt = await bcrypt.compare(password,response.password);
            if(!(token && decrypt)){
                res.send(`cannot find data.`);
            }
            else if(token && decrypt){
                res.send({result:token});
                next()
            }
        }
    }
}

exports.getData = async (req, res) => {
    console.log(req.userData)
    const response = await students.findOne({ where: { id:req.userData.id } });
    res.send({ result: [response.name,response.email,response.class ]})
}

exports.updateData = async(req,res)=>{
    const data = req.body;
    const response = await students.update(data,{where:{id:req.userData.id}});
    res.send({result:response});
}