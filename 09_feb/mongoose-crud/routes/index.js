var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentControllers');
/* GET home page. */
router.post('/students', controllers.createStudents);
router.get('/students/:page', controllers.getStudents);
router.put('/students/:id',controllers.updateStudents);
router.delete('/students/:id',controllers.deleteStudents);
module.exports = router;
