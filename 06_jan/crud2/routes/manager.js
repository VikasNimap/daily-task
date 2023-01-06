var express = require('express');
var router = express.Router();
const controllers = require('../controllers/managerControllers');
/* GET users listing. */
router.post('/manager',controllers.createManager);
router.get('/manager/:page',controllers.getManager);
router.put('/manager/:id',controllers.updateManager);
router.delete('/manager',controllers.deleteManager);
module.exports = router;
