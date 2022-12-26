var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentControllers');
const middleware = require('../middleWare/auth');
/* GET home page. */
router.post('/students',controllers.createStudents);
router.get('/students/:id',middleware.middleware,controllers.getData);
router.put('/students/:id',controllers.updateStudents);
router.delete('/students/:id',controllers.deleteStudents);


router.post('/studentsLogin',controllers.loginStudents);
module.exports = router;
