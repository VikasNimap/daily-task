var express = require('express');
var router = express.Router();
const controllers = require('../controllers/userControllers');
/* GET home page. */
router.post('/', controllers.createUser);
router.get('/',controllers.getUsers);
router.delete('/users/:id',controllers.deleteUser);
module.exports = router;
