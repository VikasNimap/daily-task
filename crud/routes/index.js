var express = require('express');
var router = express.Router();
const upload = require('../multer');
const controllers = require('../controllers/userController');
/* GET home page. */
router.post('/users',upload.uploadFile.single('picture'),controllers.createUser);

module.exports = router;
