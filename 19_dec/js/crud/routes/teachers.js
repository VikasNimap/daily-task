const  express = require('express');
const router = express.Router();
const controllers = require('../controllers/teacherControllers');
/* GET users listing. */
router.post('/teachers',controllers.createTeachers);
router.get('/teachers',controllers.getTeachers);
router.put('/teachers/:id',controllers.updateTeachers);
router.delete('/teachers/:id',controllers.deleteTeachers);
module.exports = router;
