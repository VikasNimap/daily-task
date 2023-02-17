var express = require('express');
const passport = require('passport');
var router = express.Router();
const controllers = require('../controllers/userController');
// const passport = require('passport-local');
/* GET home page. */
router.post('/register',controllers.createUser);
router.post('/login',passport.authenticate("local"),controllers.login);
module.exports = router;
