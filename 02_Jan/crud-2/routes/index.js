var express = require('express');
var router = express.Router();
const nodemailer = require('../nodemailer')
/* GET home page. */
router.get('/mail',nodemailer.send);

module.exports = router;
