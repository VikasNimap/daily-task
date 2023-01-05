var express = require('express');
var router = express.Router();
const controllers = require('../controllers/studentsControllers');
const wrapper = require('../wrapper');
/* GET home page. */
router.post('/students',wrapper(controllers.createControllers));

module.exports = router;
