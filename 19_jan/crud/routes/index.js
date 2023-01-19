var express = require('express');
var router = express.Router();
const controllers = require('../controllers/students');
const middleWare = require('../middleware/auth');
const {wrapper} = require('../wrapper');
/* GET home page. */
router.post('/students',controllers.createStudents);
// router.get('/students',middleWare.middleWare,controllers.getData);
router.post('/login',wrapper(middleWare.login,controllers.getData));
router.get('/getData',wrapper(middleWare.middleWare,controllers.getData));
module.exports = router;
