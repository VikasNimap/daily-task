var express = require('express');
var router = express.Router();
const controllers = require('../controllers/coursesControllers');
/* GET users listing. */
router.post('/courses',controllers.create);
router.get('/courses/:id',controllers.get);
router.put('/courses/:id',controllers.update);
module.exports = router;
