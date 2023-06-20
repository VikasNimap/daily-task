var express = require('express');
var router = express.Router();
const controller = require('../controller/userController');
/* GET home page. */
router.post('/', controller.createUser);

module.exports = router;
