const Razorpay = require('razorpay');
const axios = require('axios');
var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createCheckout = async (req, res) => {
    const { amount, currency, receipt } = req.body;

    var options = {
        amount: 100 * amount,  // amount in the smallest currency unit
        currency: currency,
        receipt: receipt,
        notes: ['Test Amount']
    };
    instance.orders.create(options, function (err, order) {
        if (err) {
            return res.status(400).send({ result: err })
        }
        return res.status(201).send({ result: order })
    });

}

exports.createSignature = async (req, res) => {
    try {
        let response = instance.orders.all();
        console.log(response);
        // instance.payments.all({
        //     from: '2023-01-01',
        //     to: '2023-07-10'
        // }).then((response) => {
        //       console.log(response);
        //     // handle success
        //   }).catch((error) => {
        //     // handle error
        // console.log(error.message);

        //   })
    } catch (error) {
        console.log(error.message);

    }

    // const { order_id, payment_id, signature } = req.body;
    // var { validatePaymentVerification, validateWebhookSignature } = require('./dist/utils/razorpay-utils');
    // let response = validatePaymentVerification({ "order_id": order_id, "payment_id": payment_id }, signature, process.env.RAZORPAY_KEY_SECRET);
    // console.log(response);
}