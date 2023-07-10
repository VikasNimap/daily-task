/* eslint-disable prefer-arrow-callback */
/* eslint-disable indent */
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const oAuth2client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URL);
oAuth2client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });



exports.sendEmail = async (to, subject, html) => {

    const accessToken = await oAuth2client.getAccessToken();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp',
        port: 587,
        // secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.USER_EMAIL,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refresh_token: process.env.REFRESH_TOKEN,
            accessToken: accessToken.token
        },
    });


    const mailOptions = {
        from: process.env.USER_EMAIL,
        to,
        subject,
        html,
    };
    // eslint-disable-next-line func-names
    transporter.sendMail(mailOptions, function (error, info) {
        try {
            if (error) {
                // eslint-disable-next-line no-console
                console.log(error);
            } else {
                console.log(`Email sent: ${info.response}`);
            }
        } catch (error) {
            throw new Error('something error occured' + error.message)
        }
    });
};

// story count email.

