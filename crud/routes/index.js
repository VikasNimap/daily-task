var express = require('express');
var router = express.Router();
const controllers = require('../controllers/user')
/* GET home page. */
router.get('/', controllers.getUser);

module.exports = router;
