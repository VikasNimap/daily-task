var express = require('express');
var router = express.Router();
const controllers = require('../controllers/employeesControllers');
const {wrapper} = require('../wrapper');
/* GET home page. */
router.post('/employees', wrapper(controllers.createEmployees));
router.get('/employees/:page', controllers.getEmployees);
router.put('/employees/:id', controllers.updateEmployees);
router.delete('/employees/:id', controllers.deleteEmployees);
module.exports = router;
