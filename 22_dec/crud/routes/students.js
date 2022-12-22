var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentControllers');
const cont = require('../controllers/courseControllers');

router.post('/students',controllers.createStudents);
router.get('/students',controllers.getStudents);
router.put('/students/:id',controllers.updateStudents);
router.delete('/students/:id',controllers.deleteStudents);


router.post('/course',cont.createCourses);
router.get('/course',cont.getCourses);
router.put('/course/:id',cont.updateCourses);
router.delete('/course/:id',cont.deleteCourses);
module.exports = router;
