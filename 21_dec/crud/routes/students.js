var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentControllers');
const middleware=require('../middleware/auth')
/* GET home page. */
router.post('/students',controllers.createStudents);
router.get('/students/:id',middleware.authorise,controllers.getyourData);
router.get('/students',controllers.getStudents);
router.put('/students/:id',controllers.updateStudents);
router.delete('/students/:id',controllers.deleteStudents);
router.post('/login',controllers.login)
module.exports = router;
