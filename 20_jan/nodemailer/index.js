// const nodemailer = require('nodemailer');

// // create a transporter object
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'youremail@gmail.com',
//     pass: 'yourpassword'
//   }
// });

// // define the email options
// const mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'recipient@example.com',
//   subject: 'Sending an attachment',
//   text: 'Here is the attachment',
//   attachments: [
//     {
//       filename: 'attachment.txt',
//       path: 'path/to/attachment.txt'
//     }
//   ]
// };

// // send the email
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

// let data = [1,2,3,4,5];
// for(let i = 0;i<data.length;i++){
//   if(data[i] % 2){
//     console.log(data[i])
//   }
// }

// let data = [2,3,4,5,6,6,7,7];
// let arr = [];
// for(let i = 0;i<data.length;i++){
//   for(let j = 0;j<i;j++){
//     if(data[i]==data[j]){
//       arr.push(data[i])
//     }
//   }
// }
// console.log(arr);

// console.log("before");
//  getUser(1,function(user){
//    console.log("user",user);

//  });
// console.log("after");
// function getUser(id,callback){
//   setTimeout(() => {
//     console.log("reading from db");
//     callback({id:id, gitHubUserName: "mosh"})
//     return ;
    
//   }, 2000);
// }

// console.log("before");
// getUser(1,function(user){
//   console.log("user",user);
// })
// console.log("after");
// function getUser(id,callback){
//   setTimeout(() => {
//     console.log("reading database");
//     callback( {id:id,gitHubUserName:"mosh"})
//   }, 2000);
// }




