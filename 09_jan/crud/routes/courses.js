var express = require('express');
var router = express.Router();
const controllers = require('../controllers/coursesControllers');
const {wrapper} = require('../wrapper');
/* GET users listing. */
router.post('/courses',wrapper(controllers.createCourses));
router.get('/courses/:role',wrapper(controllers.getCourses));
router.put('/courses/:id/:role',wrapper(controllers.updateCourses));
router.delete('/courses/:id/:role',wrapper(controllers.deleteCourses));
module.exports = router;
