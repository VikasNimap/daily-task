var express = require('express');
var router = express.Router();
const controllers = require('../controllers/userController');
/* GET home page. */
router.post('/users',controllers.createUsers);
router.get('/users',controllers.getUsers);
module.exports = router;
