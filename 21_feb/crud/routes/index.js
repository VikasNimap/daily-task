var express = require('express');
var router = express.Router();
const controllers = require('../controllers/userController');
/* GET home page. */
router.post('/users',controllers.createUsers);
router.get('/users/:page',controllers.getAllUsers);
router.put('/users/:id',controllers.updateUsers);
router.delete('/users/:id',controllers.deleteUsers);
module.exports = router;
