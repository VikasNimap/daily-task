var express = require('express');
var router = express.Router();
const controllers = require('../controllers/index');
/* GET home page. */
router.post('/', controllers.createUser);
router.put('/', controllers.updateUser);
module.exports = router;
