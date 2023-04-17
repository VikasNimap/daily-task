var express = require('express');
var router = express.Router();
const controllers = require('../controllers/userControllers');
/* GET home page. */
router.post('/', controllers.createUser);
router.get('/',controllers.getUsers);
module.exports = router;
