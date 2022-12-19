var express = require('express');
var router = express.Router();
const controllers = require('../controllers/busControllers');
/* GET users listing. */
router.post('/buses',controllers.createBuses);
router.get('/buses',controllers.getBuses);
router.put('/buses/:id',controllers.updateBuses);
router.delete('/buses/:id',controllers.deleteBuses);
module.exports = router;
