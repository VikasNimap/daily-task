const db = require('../models/index');
const jwt = require('jsonwebtoken');

exports.middleWare = async(req,res,next)=>{
    const token = req.headers.token;
    const response = await 
}