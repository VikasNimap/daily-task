var express = require('express');
var router = express.Router();
const controller = require('../controllers/userLogin');
/* GET home page. */
router.post('/login', controller.login);

module.exports = router;
