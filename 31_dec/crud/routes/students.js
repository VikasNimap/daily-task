var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentsControllers');
const middleWare = require('../middleWare/auth');
/* GET home page. */
router.post('/students',controllers.create);
router.post('/login',controllers.login);
router.get('/students',middleWare.middleWare,controllers.get);
router.put('/students',middleWare.middleWare,controllers.update);
module.exports = router;
