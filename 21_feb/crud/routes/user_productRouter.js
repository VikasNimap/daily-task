var express = require('express');
var router = express.Router();
const controllers = require('../controllers/user_ProductController');
/* GET users listing. */
router.post('/user_products',controllers.createUser_products);
router.get('/user_products',controllers.getUser_products);
// router.put('/products/:id',controllers.updateProducts);
// router.delete('/products/:id',controllers.deleteProducts);
module.exports = router;
