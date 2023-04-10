var express = require('express');
var router = express.Router();
const middleWare = require('../middleWare/checkAuth');
/* GET home page. */
router.get('/',middleWare.nextSession)

module.exports = router;
