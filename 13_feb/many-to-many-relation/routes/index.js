var express = require('express');
var router = express.Router();
const controllers = require('../controllers/userControllers');
/* GET home page. */
router.post('/users',controllers.createUsers);
router.get("/users",controllers.getUsers);
router.put('/users/:id',controllers.updateUsers);
module.exports = router;
