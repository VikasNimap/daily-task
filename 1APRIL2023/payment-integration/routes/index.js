var express = require('express');
var router = express.Router();
const controllers = require('../controllers/createOrders');
/* GET home page. */
router.post('/create-checkout', controllers.createOrder);

module.exports = router;
