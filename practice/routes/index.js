var express = require('express');
var router = express.Router();
const controller = require('../controllers/userLogin');
/* GET home page. */
router.post('/login', controller.login);
router.post('/forgot-password', controller.forgetPassword);

module.exports = router;
