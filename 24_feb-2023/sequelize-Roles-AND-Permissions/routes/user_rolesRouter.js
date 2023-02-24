var express = require('express');
var router = express.Router();
const controllers = require('../controllers/user_rolesController');
/* GET users listing. */
router.post('/user_roles',controllers.createUser_roles);
// router.delete('/roles/:id',controllers.deleteRoles);
module.exports = router;
