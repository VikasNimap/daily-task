var express = require('express');
var router = express.Router();
const controllers = require('../controllers/userController');
const middleWare = require('../middleWare/checkAuth');
/* GET home page. */
router.post('/users',controllers.createUsers);
router.get('/users',middleWare.checkAuth, controllers.getUsers);
router.put('/users/:id',controllers.updateUsers);
router.delete('/users/:id',controllers.deleteUsers);


router.post('/login',controllers.loginUser);
module.exports = router;
