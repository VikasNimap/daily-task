var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentsControllers');
const wrapper = require('../wrapper/wrapper');
// const middleWare = require('../middleWare/auth');
/* GET home page. */
router.post('/students',controllers.createStudents);
router.get('/students',wrapper.wrapper,controllers.getStudents);
router.put('/students/:id',wrapper.wrapper,controllers.updateStudents);
router.delete('/students/:id',wrapper.wrapper,controllers.deleteStudents);

//login
// router.post('/login',controllers.login);
// router.get('/students',middleWare.middleWare,controllers.getYourData);
module.exports = router;

