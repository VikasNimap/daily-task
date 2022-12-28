var express = require('express');
var router = express.Router();
const controllers = require('../controllers/employeesControllers');
const middleWare = require('../middleWare/auth')
/* GET home page. */
router.post('/employees',controllers.create);
// router.get('/employees',controllers.get);
router.put('/employees/:id',middleWare.middleWare,controllers.update);
router.delete('/employees/:id',middleWare.middleWare,controllers.delete);

//Login and Data retrieval
router.post('/login',controllers.login);
router.get('/employees/:id',middleWare.middleWare,controllers.getYourData);
module.exports = router;
