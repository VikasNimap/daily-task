//getting document IDs
const ObjectId = require("mongodb").ObjectId;
//db connection
const dbClient = require("../database").getConnection();
const Students = dbClient
  .db(process.env.MONGO_DB_NAME)
  .collection("students");
const Token = dbClient
  .db(process.env.MONGO_DB_NAME)
  .collection("token");

//jwt verify
const jwt = require('jsonwebtoken');

exports.checkAuth = async(req,res,next)=>{
    try {
        const token = req.headers.token;
        if(!token){
            return res.send(`some error occured, please try again.`)
        }
        else{
            const decode = jwt.verify(token,"Vikash");
            const response = await Students.findOne({email:decode});
            if(!decode){
                return res.send(`please try agaun.`);
            }
            const getData = await Token.findOne({userId:response["_id"]})
            console.log(getData);
            req.student = getData
            next()
    
        }
    } catch (error) {
        return res.send(`err.${error}`);
    }

}