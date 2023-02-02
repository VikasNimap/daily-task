const db = require('../models/index');
const image = db.image_upload;
// const img = require(__dirname,'../public/images')
const fs = require('fs');
exports.create = async(req,res)=>{
    let data = req.body;
    const image = fs.readFileSync("img.varanasi.jpg")
    // return console.log(image);
    const binaryData = new Buffer.from(image).toString('binary');
    const response = await image.create({data,image});
    return res.send(response);
}