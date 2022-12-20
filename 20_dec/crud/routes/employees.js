var express = require('express');
var router = express.Router();
const controllers = require('../controllers/employeesController')
/* GET home page. */
router.post('/employees',controllers.createEmployees);
router.get('/employees',controllers.getEmployees);
router.put('/employees/:id',controllers.updateEmployees);
router.delete('/employees/:id',controllers.deleteEmployees);
module.exports = router;
