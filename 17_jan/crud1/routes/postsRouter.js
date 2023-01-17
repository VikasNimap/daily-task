var express = require('express');
var router = express.Router();
const controllers = require('../controllers/postsControllers');
/* GET users listing. */
router.post('/post',controllers.createPost);
router.get('/post',controllers.getPost);
module.exports = router;
