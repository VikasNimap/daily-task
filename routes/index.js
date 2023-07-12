var express = require('express');
var router = express.Router();
// var placename = require('placename');
const controller = require('../controllers/paymentController');
// var ipLocation = require('ip-location')



/* GET home page. */
router.post('/checkout', controller.createCheckout);
router.post('/signature', controller.createSignature);
//  function (req, res, next) {
//   // ipLocation('http://127.0.0.1', function (err, data) {
//   //   console.log(data)
//   //   res.send({ result: data }); 
//   // })
// });


module.exports = router;




