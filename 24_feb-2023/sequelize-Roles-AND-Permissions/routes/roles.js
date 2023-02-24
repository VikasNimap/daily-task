var express = require('express');
var router = express.Router();
const controllers = require('../controllers/rolesController');
/* GET users listing. */
router.post('/roles',controllers.createRoles);
router.delete('/roles/:id',controllers.deleteRoles);
module.exports = router;
