const db = require('../models/index');
const students = db.students;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.middleWare = async (req, res, next) => {
    const token = req.headers.token;
   if(!token){
      return res.send({result:`user authentication failed`});
   }
    const decode = await jwt.verify(token, "Vikash");
    if (!decode) {
       return res.send(`invalid token`)
    }
        const response = await students.findOne({ where: { email: decode } });
        req.userData = response.dataValues
           next()

}

