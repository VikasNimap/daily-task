var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentsControllers');
const middleWare = require('../middleWare/auth');
const {wrapper} = require('../wrapper');
/* GET home page. */
router.post('/students',wrapper(controllers.createStudents));
// router.get('/students',controllers.getStudents);
router.put('/students',middleWare.middleWare,wrapper(controllers.updateStudents));
router.delete('/students',middleWare.middleWare,wrapper(controllers.deleteStudents));
//login
router.post('/login',wrapper(controllers.login));
router.get('/getData',middleWare.middleWare,wrapper(controllers.getData));
router.delete('/logout',middleWare.middleWare,controllers.logOut);
module.exports = router;
