var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vikasmaurya0864@gmail.com',
    pass: 'rypfmsikozwdlsyp'
  }
});

var mailOptions = {
  from: 'vikasmaurya0864@gmail.com',
  to: 'vikasmaurya@nimapinfotech.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
