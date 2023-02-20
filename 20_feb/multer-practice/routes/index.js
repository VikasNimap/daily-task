var express = require('express');
var router = express.Router();
const multer = require('../multer');
const controllers = require('../controllers/userController');
/* GET home page. */
router.post('/upload',multer.upload.single("profile_pic"),controllers.createUsers);

module.exports = router;
