var express = require('express');
var router = express.Router();
const controller = require('../controller/userController');
/* GET home page. */
router.post('/', controller.createUser);
router.get('/', controller.getUser);
router.put('/', controller.updateUser);

module.exports = router;
