var express = require('express');
var router = express.Router();
const controllers = require('../controllers/statesControllers');

router.post('/states',controllers.createStates);
router.get('/states',controllers.getStates);
router.put('/states/:id',controllers.updateStates);
router.delete('/states/:id',controllers.deleteStates);


module.exports = router;
