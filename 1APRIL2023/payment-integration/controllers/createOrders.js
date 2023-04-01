const Razorpay = require('razorpay');
const db = require('../models/index');


var instance = new Razorpay({
    key_id: 'rzp_test_zw4tLoaumWXlGg',
    key_secret: 'VNQPNCtoGAUZC69siqm4QhBv',
});
exports.createOrder = async (req, res) => {
    try {
        var options = {
            amount: req.body.amount,  // amount in the smallest currency unit
            currency: req.body.currency,
            receipt: req.body.receipt
        };
        instance.orders.create(options, async function (err, order) {
            let data = {
                orderId: order.id, amount: order.amount, currency: order.currency
            };
            const response = await db.payment.create(data);
            res.send({ result: order, response })
        });
    } catch (error) {
        res.status(500).send({ result: `${error}` })
    }

}


