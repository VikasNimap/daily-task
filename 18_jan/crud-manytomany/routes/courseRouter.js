var express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
var router = express.Router();
const controllers = require('../controllers/coursesController');
const swagger = require('../swagger');

/* GET users listing. */
/** 

 @swagger
 tags: 
     name: courses
         description: all courses
 

*/

/**
 * @swagger
 * /course/:
 *  post:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
// router.post('/' ,controllers.createCourse);
router.get('/course',controllers.redis_post,controllers.getCourse);
module.exports = router;
