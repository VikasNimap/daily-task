var express = require('express');
var router = express.Router();
const controllers = require('../controllers/user_productsControllers');
/* GET home page. */
router.post('/user_products',controllers.createUser_products);
router.get("/user_product",controllers.get);
router.delete('/user_product/:id',controllers.deleteUser_products);
module.exports = router;