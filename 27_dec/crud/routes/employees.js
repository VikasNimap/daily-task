var express = require('express');
var router = express.Router();
const controllers = require('../controllers/employeesControllers');
const middleWare = require('../middleWare/auth');
const {createEmployeeRules,validate}=require('../validators/employee-validator')

/* GET home page. */
router.post('/employees',createEmployeeRules(),validate,controllers.createEmployees);
router.get('/employees/:id',middleWare.middleWare,controllers.getData);
router.put('/employees/:id',middleWare.middleWare,controllers.updateEmployees);
router.delete('/employees/:id',middleWare.middleWare,controllers.deleteEmployees);


router.post('/login',controllers.login);
module.exports = router;
