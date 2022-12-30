var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentControllers');
const middleWare = require('../middleWare/auth');
/* GET home page. */
router.post('/students',controllers.createStudents);
// router.get('/students',controllers.getStudents);
router.put('/students/:id',controllers.updateStudents);
router.delete('/students/:id',controllers.deleteStudents);
//restore deleted data
router.get('/students/:id',controllers.restoreStudents);
//login
router.post('/login',controllers.login);
router.get('/students',middleWare.middleWare,controllers.getYourData);
module.exports = router;
