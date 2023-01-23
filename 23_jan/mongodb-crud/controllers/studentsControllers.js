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

//jwt and bcrypt
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// controllers
exports.createStudents = async (req, res) => {
  const data = req.body;
  // const salt = await bcrypt.genSalt(10);
  // data.password = await bcrypt.hash(data.password,salt);
  const response = await Students.insertOne(data);
  res.send({ result: response });
}
exports.getStudents = async(req,res)=>{
  const response = await Students.find().toArray();
  res.send({result:response});
}
exports.updateStudents = async(req,res)=>{
  const userId = { _id: new ObjectId(req.params.id) };
  const data = req.body;
  const response = await Students.findOneAndUpdate( userId,{$set: data});
  res.send({result:response});
}
exports.deleteStudents = async(req,res)=>{
  const userId = req.student;
  const response = await Students.deleteOne({_id:userId["_id"]});
  res.send({result:response});
}
exports.login = async(req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  if(!(email && password)){
    return res.send({result:`please enter valid email and password.`})
  }
  else{
    const response = await Students.findOne({email:email});
    const userId = response["_id"]
    const decode = await bcrypt.compare(password,response.password);
    if(!decode){
      return res.send({result:`please enter valid email & password and try again.`})
    }
    const token = jwt.sign(response.email,"Vikash");
    const data = {token:token,userId:userId};
    const store = await Token.insertOne(data);
    return res.send({result:store,token:token});
    
  }
}
exports.getData = async(req,res)=>{
  const data = req.student;
  const response = await Students.findOne({email:data.email});
  res.send({result:response});
}

exports.logOut = async(req,res)=>{
  const data = req.student;
  console.log(data);
  const response = await Token.deleteOne({userId:data["_id"]});
  return console.log(response);
}