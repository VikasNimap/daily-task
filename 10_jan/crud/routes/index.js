var express = require('express');
var router = express.Router();
const multerUpload = require('../multer/uploadMulter')
/* GET home page. */
router.post('/upload',multerUpload,(req,res)=>{
  res.send({result:`uploaded`})
})

module.exports = router;
