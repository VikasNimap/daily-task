var express = require('express');
var router = express.Router();
const multerUpload = require('../multerUpload/upload')
/* GET home page. */
router.post('/file',multerUpload);

module.exports = router;
