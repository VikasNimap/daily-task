var express = require('express');
var router = express.Router();
const controllers = require('../controllers/categoryControllers');
/* GET users listing. */
router.post('/post-cat',controllers.createCategory);
router.get('/get-cat',controllers.getCategory);
router.put('/update-cat',controllers.updateCategory);
router.delete('/delete-cat',controllers.deleteCategory);
module.exports = router;
