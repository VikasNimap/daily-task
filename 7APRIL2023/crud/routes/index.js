var express = require('express');
var router = express.Router();
const controllers = require('../controllers/userController');
const middleWare = require('../middleware/checkAuth');
/* GET home page. */
// router.post('/users',controllers.createUser)
router.get('/findAllUsers', middleWare.verify, middleWare.permission, controllers.getUser);
router.post('/login', controllers.login);

module.exports = router;
