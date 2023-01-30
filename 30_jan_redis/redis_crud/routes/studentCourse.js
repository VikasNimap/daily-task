var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentCourseControllers');
/* GET users listing. */
router.post('/studentCourse',controllers.createJunction);
router.get('/studentCourse',controllers.getJunction);
module.exports = router;
