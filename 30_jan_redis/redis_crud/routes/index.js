var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentsControllers');
/* GET home page. */
router.post('/students',controllers.createStudents);
router.get('/students',controllers.getStudents);
module.exports = router;
