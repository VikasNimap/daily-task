var express = require('express');
var router = express.Router();
const controllers = require('../controllers/bookControllers');
const {wrapper} = require('../wrapper');
/* GET users listing. */
router.post('/book',wrapper(controllers.createBook));
router.get('/book/:page',wrapper(controllers.getBook));

module.exports = router;
