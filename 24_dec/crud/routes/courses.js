var express = require('express');
var router = express.Router();
const controllers = require('../controllers/coursesControllers');
/* GET users listing. */
router.post('/courses',controllers.createCourses);
router.get('/courses',controllers.getCourses);
router.put('/courses/:id',controllers.updateCourses);
router.delete('/courses/:id',controllers.deleteCourses);
module.exports = router;