var express = require('express');
var router = express.Router();
const controllers = require('../controllers/productsControllers');
/* GET users listing. */
router.post('/products',controllers.createProducts);
router.get('/products/:page',controllers.getProducts);
router.get('/pr',controllers.getAllProducts);
router.delete('/products/:id',controllers.deleteProducts);
module.exports = router;
