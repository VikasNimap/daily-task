var nodemailer = require('nodemailer');

exports.send = async(req,res)=>{


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vikasmaurya0864@gmail.com',
    pass: 'rypfmsikozwdlsyp'
  }
});

var mailOptions = {
  from: 'vikasmaurya0864@gmail.com',
  to: ' vikasmaurya@nimapinfotech.com',
  subject: 'nodemailer',
  html: '<h1 bg:blue>Welcome</h1><p>blue</p>',
  text: 'It is super exciting!!!!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    res.send('Email sent: ' + info.response);
    console.log('Email sent: ' + info.response);
  }
});
}