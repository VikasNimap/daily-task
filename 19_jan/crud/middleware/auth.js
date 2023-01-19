const db = require('../models/index');
const students = db.students;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.middleWare = async(req,res,next)=>{
    const token = req.headers.token;
    if(!token){
        res.send("please enter token");
    }
    else{
        const decode = await jwt.verify(token,"Vikash");
        if(!decode){
            res.send(`invalid token`)
        }
        else{
            const response = await students.findOne({where:{email:decode}});
           data = response.id
        //    console.log(data);
           next()
        }
    }
        
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
            const token = await jwt.sign(response.email,"Vikash");
            const decrypt = await bcrypt.compare(password,response.password);
            if(!(token && decrypt)){
                res.send(`cannot find data.`);
            }
            else if(token && decrypt){
                res.send(token);
                next()
            }
        }
    }
}