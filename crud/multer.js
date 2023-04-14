const multer = require('multer');

const fileFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[1] === "jpeg"||
    file.mimetype.split("/")[1] === "jpg"||
    file.mimetype.split("/")[1] === "png") {
      cb(null, true);
    } else {
      cb(new Error("Not a image File!!"), false);
    }
  };


const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `${Date.now()}.${ext}`);
      // console.log(file);
    },
  });


  exports.uploadFile = multer({ storage: multerStorage,fileFilter:fileFilter });