var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentsControllers');
const {wrapper} = require('../wrapper');
const middleWare = require('../middleWare/auth')
/* GET home page. */
router.post('/students',wrapper(controllers.createStudents));
router.get('/students',wrapper(middleWare.middleWare));
router.post('/login',wrapper(controllers.login));
module.exports = router;
