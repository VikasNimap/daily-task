var express = require('express');
var router = express.Router();
const controllers = require('../controllers/userRegistrationControllers');
const {wrapper} = require('../../utils/wrapper');
/* GET home page. */
router.post('/registration',wrapper(controllers.createUser));
router.get('/getUser',wrapper(controllers.getData));
router.put('/updateUser/:id',wrapper(controllers.updateUser));
router.delete('/deleteUser/:id',wrapper(controllers.deleteUser));
router.post('/generateOtp',wrapper(controllers.loginUser));
module.exports = router;
