var express = require('express');
var router = express.Router();
const controllers = require('../controllers/user_productsController');
/* GET users listing. */
router.post('/user-products',controllers.createUser_products);
router.get('/user-products',controllers.getUser_products);
module.exports = router;
