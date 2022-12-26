const db = require('../models/index');
const states = db.states;

exports.createStates = async (req, res) => {
    const data = req.body;
    const response = await states.create(data);
    res.send({ 'msg': 'success', result: response });
}
exports.getStates = async (req, res) => {
    const response = await states.findAll({
        attributes: {
            exclude: ['id','createdAt', 'updatedAt']
        },
        include: {
            model: db.capitals,
           attributes: ['capital']
        }
    });
    res.send({ 'msg': 'success', result: response });
}
exports.updateStates = async (req, res) => {
    const userId = req.params.id;
    const data = req.body;
    const response = await states.update(data, { where: { id: userId } });
    res.send({ 'msg': 'success', result: response });
}
exports.deleteStates = async (req, res) => {
    const userId = req.params.id;
    const response = await states.destroy({ where: { id: userId } });
    res.send({ 'msg': 'success', result: response });
}

// exports.login=async (req,res)=>{
//     const {email,password}=req.body
//     const response=await students.findOne({where:{[Op.and]: [{ email: email }, { password: password }]}})
//     const token=jwt.sign(response.contact,"vikash")
//     res.send({token:token})

// }

exports.getyourData=async (req,res)=>{
    const userId=req.params.id
    const data=await students.findOne({where:{id:userId}})
    res.send(data)
}