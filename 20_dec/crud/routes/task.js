var express = require('express');
var router = express.Router();
const controllers = require('../controllers/taskControllers');
/* GET users listing. */
router.post('/task',controllers.createTask);
router.get('/task/:id',controllers.getTask);
router.put('/task/:id',controllers.updateTask);
router.delete('/task/:id',controllers.deleteTask);
module.exports = router;
