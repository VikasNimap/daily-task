// const multer = require('multer');


// const upload = multer({
//     storage:multer.diskStorage({
//         destination: function(req,file,cb){
//             cb(null,"public/images")
//         },
//         filename: function(req,file,cb){
//             cb(null,this.filename+"_"+Date.now()+".jpg");
//         }
//     })
// }).single("file_");
// module.exports = upload;


const multer = require("multer");

const fileFiter = (req, file, cb) => {
    if (file.mimetype == "image/jpg" || file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
        cb(null, true);
    }
    else {
        cb("Please upload only image file.");
    }
}

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        const extArray = file.originalname.split(".");
        const extention = extArray[extArray.length - 1];
        cb(null, `${Date.now()}_${extArray[0] ? extArray[0] : ""}.${extention}`);
    },
    destination: (req, file, cb) => {
        cb(null, "public/images")
    }
})

const uploadFile = multer({ storage: storage, fileFilter: fileFiter });
const multiUpload = uploadFile.single('image');
module.exports = multiUpload;