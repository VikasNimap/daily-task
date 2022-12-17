const express = require('express');
const router = express.Router();
const controllers = require('../controllers/userControllers');
/* GET users listing. */
router.post('/users',controllers.createUsers);
router.get('/users',controllers.getUsers);
router.put('/users/:id',controllers.updateUsers);
router.delete('/users/:id',controllers.deleteUsers);
module.exports = router;
