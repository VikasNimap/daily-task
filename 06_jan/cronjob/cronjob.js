const cron = require('node-cron');

cron.schedule(' * * * * * ', () => {

  const nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vikasmaurya@nimapinfotech.com',
      pass: ''
    }
  });

  var mailOptions = {
    from: 'vikasmaurya0864@gmail.com',
    to: 'virendrapathak@nimapinfotech.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  // console.log(`done`);
})