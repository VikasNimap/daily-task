var express = require('express');
const multiUpload = require('../multer/upload');
var router = express.Router();
const uploadFile = require('../multer/upload');
/* GET home page. */
router.post('/upload', uploadFile, (req, res) => {
  res.send(`uploaded`)
})
module.exports = router;
