var express = require('express');
var router = express.Router();
const controllers = require('../../../controllers/mainCategoryControllers')
/* GET home page. */
router.post('/students',controllers.createMainCategories);

module.exports = router;
