var express = require('express');
var router = express.Router();
const controllers = require('../controllers/teachersController');
/* GET home page. */
router.post('/teacher',controllers.createTeacher);
router.get('/teacher',controllers.getTeacher);
module.exports = router;
