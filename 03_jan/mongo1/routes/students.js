var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentsControllers');
const middleWare = require('../middleWare/auth');
/* GET home page. */
router.post('/students',controllers.createStudents);
router.get('/students',controllers.getStudents);
router.put('/students/:id',controllers.updateStudents);
router.delete('/students/:id',controllers.deleteStudents);

//login
// router.post('/login',controllers.login);
// router.get('/students',middleWare.middleWare,controllers.getYourData);
module.exports = router;
