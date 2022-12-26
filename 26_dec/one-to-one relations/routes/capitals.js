var express = require('express');
var router = express.Router();
const controllers = require('../controllers/capitalControllers');

router.post('/capitals',controllers.createCapitals);
router.get('/capitals',controllers.getCapitals);
router.put('/capitals/:id',controllers.updateCapitals);
router.delete('/capitals/:id',controllers.deleteCapitals);
module.exports = router;
