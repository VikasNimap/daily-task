var express = require('express');
var router = express.Router();
const controllers = require('../controllers/imageUpload');
/* GET home page. */
router.post('/user',controllers.create);

module.exports = router;
