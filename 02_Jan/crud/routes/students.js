var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentsControllers');
/* GET home page. */
router.post('/courses',controllers.createCourses);
// router.get('/students/get',controllers.getStudents);
// router.put('/students/:id',controllers.updateStudents);
// router.delete('/students/:id',controllers.deleteStudents);
module.exports = router;
