var express = require('express');
var router = express.Router();
const controller = require('../controllers/timezone');
/* GET home page. */
router.get('/', controller.getTime);

module.exports = router;
