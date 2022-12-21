const jwt=require('jsonwebtoken')
const db=require('../models/index')
exports.authorise=async (req,res,next)=>{
    const token=req.headers.token
    const decode=jwt.decode(token,"vikas")
    const data=await db.students.findOne({where:{contact:decode}})
    if(req.params.id!=data.id)return res.send("usend not allowed to acces other user")
    next()
}