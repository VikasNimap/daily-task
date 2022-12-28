var express = require('express');
var router = express.Router();
const controllers = require('../controllers/employeesControllers');
const middleWare = require('../middleWare/auth');
/* GET home page. */
router.post('/employees',controllers.createEmployees);
// router.get('/employees',controllers.getEmployees);
router.put('/employees/:id',controllers.updateEmployees);
router.delete('/employees/:id',controllers.deleteEmployees);


//Routes for login & fetching data
router.post('/login',controllers.login);
router.get('/employees/:id',middleWare.middleWare,controllers.getYourData);
module.exports = router;
