var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentsControllers');
const middleWare = require('../middleWare/auth')
/* GET home page. */
router.post('/students',controllers.createStudents);
// router.get('/students',controllers.getStudents);
router.put('/students',middleWare.middleWare,controllers.updateStudents);
router.delete('/students',middleWare.middleWare,controllers.deleteStudents);


router.post('/login',controllers.login);
router.get('/students',middleWare.middleWare,controllers.getYourData);
module.exports = router;
