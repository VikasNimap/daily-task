var express = require('express');
var router = express.Router();
const controllers = require('../controllers/userController');
/* GET home page. */
// router.post('/users',controllers.createUser)
router.get('/users', controllers.getUser);
router.post('/login', controllers.login);
module.exports = router;
