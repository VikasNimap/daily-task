var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentsControllers');
/* GET home page. */
router.post('/students',controllers.createStudents);


router.post('/login',controllers.login);
module.exports = router;
