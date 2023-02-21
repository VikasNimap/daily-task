var express = require('express');
var router = express.Router();
const controllers = require('../controllers/productController');
/* GET users listing. */
router.post('/products',controllers.createProducts);
router.get('/products',controllers.getProducts);
router.put('/products/:id',controllers.updateProducts);
router.delete('/products/:id',controllers.deleteProducts);
module.exports = router;
