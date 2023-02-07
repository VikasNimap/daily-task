var express = require('express');
var router = express.Router();
const controllers = require('../controllers/productsControllers');
const controllers1 = require('../controllers/categoryControllers');
/* GET home page. */
//products
router.post('/products',controllers.createProducts);
router.get('/products',controllers.getProducts);
router.put('/products/:id',controllers.updateProducts);
router.delete('/products/:id',controllers.deleteProducts);
//categories
router.post('/categories',controllers1.createCategories);
router.get('/categories',controllers1.getCategories);
module.exports = router;
