
const services = require('../services/userServices');




exports.createUsers = async (req,res) => {
    const data = req.body;
    const response = await services.createUser(data);
    if(response.result){
        res.status(201).send({result:response.result})
    }
    else{
        res.status(400).send({result:response.message})
    }
}

exports.getAllUsers = async(req,res) => {
    const response = await services.findAllUsers();
    if(response.result){
        res.status(200).send({result:response.result})
    }
    else{
        res.status(404).send({result:response.message})
    }

}

exports.getUserById = async (req,res) => {
    const userId = req.params.id;
    const response = await services.getUserById(userId);
    if(response.result){
        res.status(200).send({result:response.result})
    }
    else{
        res.status(404).send({result:response.message})
    }
}

exports.updateUser = async (req,res) => {
    const userId = req.params.id;
    const data = req.body;
    const response = await services.updateOneUser(userId, data);
    if(response.result) {
        res.status(200).send({result:response.result})
    }
    else{
        res.status(400).send({result:response.message})
    }
}

exports.restoreUser = async (req,res) => {
    const userId = req.params.id;
    const response = await services.restoreUserData(userId);
    if(response.result) {
        res.status(200).send({result:response.result})
    }
    else{
        res.status(400).send({result:response.message})
    }

}

exports.deleteUser = async (req,res) => {
    const userId = req.params.id;
    const response = await services.deleteUserData(userId);
    if(response.result) {
        res.status(200).send({result:response.result})
    }
    else{
        res.status(400).send({result:response.message})
    }
}

exports.login = async (req,res) => {
    const {email,password} = req.body;
    const response = await services.userLogin(email,password);
    if(response.result){
        res.status(200).send({result:response.result})
    }
    else{
        res.status(404).send({result:response.message})
    }
}

exports.forgotPassword = async (req,res) => {
    const email = req.body.email;
    const response = await services.forgetPassword(email);
    if(response.result){
        res.status(200).send({result:response.result});
    }
    else{
        res.status(400).send({result:response.message})
    }
}

exports.verifyOtp = async (req,res) =>{
    const userId = req.params.id;
    const otp = req.body.otp;
    const response = await services.verifyOtp(userId,otp);
    if(response.result){
        res.status(200).send({result:response.result})
    }
    else{
        res.status(400).send({result:response.message})
    }
}

exports.resetPassword = async (req,res) => {
    const userId = req.params.id;
    const {password,confirmPassword} = req.body;
    const response = await services.resetUserPasswd(userId,password,confirmPassword);
    if(response.result){
        res.status(201).send({result:response.result})
    }
    else{
        res.status(400).send({result:response.message})
    }
}

exports.logOut = async (req,res) => {
    const userId = req.params.id;
    const token = req.header("Authorization");
    const response = await services.user_logOut(userId,token);

}