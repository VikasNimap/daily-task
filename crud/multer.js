const multer = require('multer');

const fileFilter = (req, file, cb) => {
    console.log("=======",file.mimetype);
    if (file.mimetype.split("/")[1] === "jpeg"||
    file.mimetype.split("/")[1] === "jpg"||
    file.mimetype.split("/")[1] === "png") {
      cb(null, true);
    } else {
      cb(new Error("Not a PDF File!!"), false);
    }
  };



const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `http://127.0.0.1:3000-${file.fieldname}-${Date.now()}.${ext}`);
    },
  });


  exports.uploadFile = multer({ storage: multerStorage,fileFilter:fileFilter });