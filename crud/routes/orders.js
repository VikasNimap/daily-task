const express = require('express');
const router = express.Router();
const controllers = require('../controllers/orderControllers');

/* GET home page. */
router.post('/orders',controllers.createOrders);
router.get('/orders',controllers.getOrders);
router.put('/orders/:id',controllers.updateOrders);
router.delete('/orders/:id',controllers.deleteOrders);
module.exports = router;
