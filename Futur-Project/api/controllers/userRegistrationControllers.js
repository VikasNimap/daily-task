const services = require('../../services/userRegistrationSevices');

exports.createUser = async (req, res) => {
    const data = req.body;
    const response = await services.createUser(data);
    res.send({ result: response });
}
// exports.getUser = async (req, res) => {
//     const response = await services.findUser();
//     res.send({ result: response });
// }
exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const data = req.body;
    const response = await services.update(userId,data);
    res.send({result:response});
}
exports.deleteUser = async(req,res)=>{
    const userId = req.params.id;
    const response = await services.delete(userId);
    res.send({result:response});
}
//login
exports.loginUser = async(req,res)=>{
    const phone = req.body.phone;
    if(!phone){
        return res.send(`please enter valid phone and password.`)
    }
    else{
        const response = await services.login(phone);
        res.send({OTP:response});
    }
}
exports.getData = async(req,res)=>{
    const otp = req.body.otp;
    if(!otp){
        return res.send({result:`please enter valid otp`})
    }
    const response = await services.getuserData(otp);
    res.send({result:response})
}