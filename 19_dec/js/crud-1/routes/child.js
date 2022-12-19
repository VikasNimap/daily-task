var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentsControllers');
/* GET home page. */
/* GET users listing. */
router.post('/students',controllers.createStudents);
router.get('/students',controllers.getStudents);
router.put('/students/:id',controllers.updateStudents);
router.delete('/students/:id',controllers.deleteStudents);
module.exports = router;

module.exports = router;
