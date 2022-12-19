const express = require('express');
const router = express.Router();
const controllers = require('../controllers/studentControllers');
/* GET home page. */
router.post('/students',controllers.createStudents);
router.get('/students',controllers.getStudents);
router.put('/students/:id',controllers.updateStudents);
router.delete('/students/:id',controllers.deleteStudents);
module.exports = router;
