const fs = require('fs');
const db = require('../models/user');
exports.implementQueue = async (req, res) => {
    // setTimeout(() => {
    //     console.log('timeout expires');
    // }, 0);
    fs.readFile('./app.js', 'utf-8', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            setTimeout(() => {
                console.log('timeout expires');
            }, 0);
            setImmediate(function () {
                console.log('Invoked immediately');
            });

            process.nextTick(function () {
                console.log('Inside process nextTick');
            });
            // setInterval(function () {
            //     console.log('Hello and welcome');
            // }, 10000)
        }
    });
    let p1 = new Promise((resolve, reject) => {
        let a = 50;
        if (a) {
            resolve(a)
        } else {
            reject(new Error('error inside'));
        }
    })
    let re = await p1
    console.log(re);
    // setImmediate(function () {
    //     console.log('Invoked immediately');
    // });
}

exports.createUser = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const response = await db.create(data)
        res.send(response)
    } catch (error) {
        res.send(error)
    }

}