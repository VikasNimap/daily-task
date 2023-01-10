const multer = require('multer');

const fileFilter = (req, file, cb) => {
    if (file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
        cb(null, true)
    }
    else {
        cb({ result: "please provide image file only" })
    }
}
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        const extArray = file.originalname.split('.');
        const extension = extArray[extArray.length - 1];
        cb(null,`${Date.now()}_${extArray[0] ? extArray : ""}.${extension}`);
    },
    destination:(req,file,cb)=>{
        cb(null,"public/images")
    }
})
const uploadFile = multer({storage:storage,fileFilter:fileFilter});
const multiUpload = uploadFile.single('image');
module.exports = multiUpload;