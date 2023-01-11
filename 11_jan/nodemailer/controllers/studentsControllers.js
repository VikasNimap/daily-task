const db = require('../models/index');
const students = db.students;
const nodemailer = require('nodemailer');

exports.createStudents = async(req,res)=>{
    const data = req.body;
    const response = await students.create(data);
    //
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'vikasmaurya0864@gmail.com',
          pass: 'uswfqspgcdvnglgh'
        }
      });
      
      var mailOptions = {
        from: `vikasmaurya0864@gmail.com`,
        to: `${req.body.email}`,
        subject: 'Sending Email using Node.js',
        text: `Body - This is to inform you that there is a new client request. Kindly login and take appropriate action.


        name : ${req.body.name}
        Email id  - ${req.body.email}
        Contact no. - 
        
        Company name  -`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    //
   return res.send({result:response});
}