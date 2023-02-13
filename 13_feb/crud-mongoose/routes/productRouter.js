var express = require('express');
var router = express.Router();
const controllers = require('../controllers/productControllers');
/* GET users listing. */
router.post('/post-pro',controllers.createProducts);
router.get('/get-pro',controllers.getProducts);
router.put('/update-pro/:id',controllers.updateProducts);
router.delete('/delete-pro',controllers.deleteProducts);
module.exports = router;
