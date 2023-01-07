var express = require('express');
var router = express.Router();
const controllers = require('../controllers/authorControllers');
const {wrapper} = require('../wrapper');
/* GET home page. */
router.post('/author',wrapper(controllers.createAuthor));
router.get('/author/:page',wrapper(controllers.getAuthor));
router.put('/author/:id',wrapper(controllers.updateAuthor));
module.exports = router;
