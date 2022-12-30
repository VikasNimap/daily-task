var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentControllers');
const middleWare = require('../middleWare/auth');
/* GET home page. */
router.post('/students',controllers.createStudents);
router.get('/students',middleWare.middleWare,controllers.getStudents);
router.put('/students',middleWare.middleWare,controllers.updateStudents);

router.post('/login',controllers.login);
module.exports = router;
