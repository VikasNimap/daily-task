var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentsControllers');
const middleWare = require('../middleWare/auth');
const {wrapper} = require('../wrapper');
/* GET home page. */
router.post('/students',wrapper(controllers.createStudents));
router.get('/students',controllers.getStudents);
router.put('/students/:id',middleWare.checkAuth,wrapper(controllers.updateStudents));
router.delete('/students',middleWare.checkAuth,wrapper(controllers.deleteStudents));
//login
router.post('/login',wrapper(controllers.login));
router.get('/getData',middleWare.checkAuth,wrapper(controllers.getData));
router.delete('/logout',middleWare.checkAuth,controllers.logOut);
module.exports = router;
