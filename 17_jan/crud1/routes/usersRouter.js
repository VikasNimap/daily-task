var express = require('express');
var router = express.Router();
const controllers = require('../controllers/userControllers');
/* GET home page. */
router.post('/users',controllers.createUsers);
router.get('/users',controllers.getUsers);
module.exports = router;
