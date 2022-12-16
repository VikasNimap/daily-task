const express = require('express');
const router = express.Router();
const controllers = require('../controllers/customerController');

router.post('/customers',controllers.createCustomers);
router.get('/customers/',controllers.getCustomers);
router.put('/customers/:id',controllers.updateCustomers);
router.delete('/customers/:id',controllers.deleteData);
module.exports = router;


