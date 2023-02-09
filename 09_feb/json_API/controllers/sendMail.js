const nodemailer = require('nodemailer');

exports.sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    let transport = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'andre.wolf40@ethereal.email',
            pass: 'yqnfTb6bcVGtp4PV1v'
        },
    })
    let info = await transport.sendMail({
        from: 'andre.wolf40@ethereal.email',
        to: 'vikasmaurya@nimapinfotech.com',
        subject: 'sending mail using nodemailer',

    })
    res.send("Message sent: %s", info.messageId);
    res.send("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}