var express = require('express');
var router = express.Router();
const controllers = require('../controllers/productControllers');

/* GET users listing. */
router.post('/products',controllers.createProducts);
router.get('/products',controllers.getProducts);
module.exports = router;
