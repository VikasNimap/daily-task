const multer = require('multer');

const fileFilter = (req, file, cb) => {
    console.log(file);
    if (file.mimetype == "pdf") {
        cb(null, true)
    }
    else{
        cb("please upload pdf file only.")
    }
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/pdf")
    },
    filename:(req,file,cb)=>{
        const extArray = file.originalname.split('.');
        const extention = extArray[extArray.length-1];
        cb(null,`${Date.now()}_${extArray[0] ? extArray[0] : ""}.${extention}`)
    }
})

const uploadFile = multer({ storage: storage, fileFilter: fileFilter });
const multiUpload = uploadFile.single('pdf');
module.exports = multiUpload;
