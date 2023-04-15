var express = require('express');
var router = express.Router();
const controllers = require('../controllers/userController');
const {wrapper} = require('../utils/errorWrapper');
const validation = require('../middleWare/checkValidation');
const check = require('../utils/catchValidation');
/* GET home page. */
// create user
router.post('/users',validation.checkValid,check.catch,wrapper(controllers.createUsers));

//get All users
router.get('/users',wrapper(controllers.getAllUsers));

//get user-by-Id
router.get('/users/user-by-Id/:id',wrapper(controllers.getUserById));

//update-user
router.put('/users/update-user/:id',wrapper(controllers.updateUser));

//restore user-data
router.get('/users/restore-user/:id',wrapper(controllers.restoreUser));
//delete user
router.delete('/users/delete-one-user/:id',wrapper(controllers.deleteUser));

//user-login
router.post('/users/login',validation.loginValidation,check.catch,wrapper(controllers.login));

//forget-passwd enter email
router.post('/users/forgot-password',validation.verifyEmail,check.catch,wrapper(controllers.forgotPassword));

//verify otp
router.post('/users/verify-otp',validation.otp,check.catch,wrapper(controllers.verifyOtp));

//update password
router.put('/users/update-password/:id',validation.checkPasswd,check.catch,wrapper(controllers.resetPassword)); 



module.exports = router;
