var express = require('express');
var router = express.Router();
const controllers = require('../controllers/coursesControllers');
/* GET users listing. */
router.post('/courses',controllers.createCourses);
router.get('/courses/:page',controllers.getCourses);
router.put('/students/:id',controllers.update);
module.exports = router;
