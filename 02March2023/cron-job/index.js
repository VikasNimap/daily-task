// // console.log("cron");
// const cron = require('node-cron');
// const express = require('express');
// const nodeMailer = require('nodemailer');
// app = express();

// app.listen(8000);
// let testAccount = nodeMailer.createTestAccount();

// let transporter = nodeMailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//     user: 'mathilde18@ethereal.email', // generated ethereal user
//     pass: 'pdCtCDpgehjvecWbKu' // generated ethereal password
//     }
//     });
//     const mailOptions = {
//     from: `mathilde18@ethereal.email`, // sender address
//     to: 'abc@gmail.com', // list of receivers
//     subject: 'Hello there!', // Subject line
//     text: 'A Message from Node Cron App', // plain text body
//     html: '<b>A Message from Node Cron App</b>' // html body
//     };
    

// cron.schedule("* * * * * *", function () {
//     transporter.sendMail(mailOptions, function (error, info) {
//         console.log(info.messageId);
//         if (err) {
//         console.log(err);
//         }
//         });
//     console.log("Running Cron Job");
// });
