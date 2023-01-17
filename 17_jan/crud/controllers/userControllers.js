const db = require('../models/index');
const users = db.users;
const multer = require('multer');
const path = require('path');
exports.createUsers = async(req,res)=>{
    // const image = req.file.filename
    const data = {
        name:req.body.name,
        email:req.body.email,
        image:req.file.filename
    }
    console.log(data);
    const response = await users.create(data);
    res.send({result:response})
}
exports.getUsers = async(req,res)=>{
    const response = await users.findAll();
    res.send({result:response});
}


const fileFilter = (req, file, cb) => {
    console.log(file);
    if (file.mimetype.split('/')[1] === "pdf") {
        cb(null, true)
    }
    else{
        cb("please upload valid image file only.")
    }
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/javascripts")
    },
    filename:(req,file,cb)=>{
        const extArray = file.originalname.split('.');
        const extention = extArray[extArray.length-1];
        cb(null,`${Date.now()}_${extArray[0] ? extArray[0] : ""}.${extention}`)
    }
})

exports.uploadFile = multer({ storage: storage, fileFilter: fileFilter,limits:{fileSize:'99'} }).single('image');;
