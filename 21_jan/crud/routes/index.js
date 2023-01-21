var express = require('express');
var router = express.Router();
const controllers = require('../controllers/students');
const middleWare = require('../middleware/auth');
const {wrapper} = require('../wrapper');
/* GET home page. */
router.post('/students',controllers.createStudents);
// router.get('/students',middleWare.middleWare,controllers.getData);
router.post('/login',wrapper(controllers.login));
router.get('/getData',middleWare.middleWare,wrapper(controllers.getData));
router.put('/students',middleWare.middleWare,controllers.updateData);
module.exports = router;
