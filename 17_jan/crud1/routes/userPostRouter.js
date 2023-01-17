const express = require('express');
const router = express.Router();
const controllers = require('../controllers/userPostControllers');

router.post('/userPost',controllers.createUserPosts);
router.get('/userPost',controllers.getUserPosts);
module.exports = router;