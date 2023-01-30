var express = require('express');
var router = express.Router();
const controllers = require('../controllers/courseControllers');
/* GET users listing. */
router.post('/courses',controllers.createCourses);
router.get('/courses',controllers.getCourses);
module.exports = router;
