const db = require('../models/index');
const capitals = db.capitals;

exports.createCapitals = async (req, res) => {
    const data = req.body;
    const response = await capitals.create(data);
    res.send({ 'msg': 'success', result: response });
}
exports.getCapitals = async (req, res) => {
    const response = await capitals.findAll({
        attributes: {
            exclude: ['id','createdAt', 'updatedAt']
        },
        include: {
            model: db.states,
           attributes: ['name']
        }
    });
    res.send({ 'msg': 'success', result: response });
}
exports.updateCapitals = async (req, res) => {
    const userId = req.params.id;
    const data = req.body;
    const response = await capitals.update(data, { where: { id: userId } });
    res.send({ 'msg': 'success', result: response });
}
exports.deleteCapitals = async (req, res) => {
    const userId = req.params.id;
    const response = await capitals.destroy({ where: { id: userId } });
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