//getting document IDs
const ObjectId = require("mongodb").ObjectId;
//db connection
const dbClient = require("../database").getConnection();
const Students = dbClient
  .db(process.env.MONGO_DB_NAME)
  .collection("students");

//jwt verify
const jwt = require('jsonwebtoken');

exports.middleWare = async(req,res,next)=>{
    try {
        const token = req.headers.token;
        if(!token){
            return res.send(`some error occured, please try again.`)
        }
        else{
            const decode = jwt.verify(token,"Vikash");
            if(!decode){
                return res.send(`please try agaun.`);
            }
            const response = await Students.findOne({email:decode});
            req.student = response
            next()
    
        }
    } catch (error) {
        return res.send(`err.${error}`);
    }

}