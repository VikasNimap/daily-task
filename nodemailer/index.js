const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const cron = require('node-cron');
const oAuth2client = new google.auth.OAuth2('211804349949-547fdier15conli9q0qldpf16f8fp09r.apps.googleusercontent.com', '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', 'https://developers.google.com/oauthplayground');
oAuth2client.setCredentials({ refresh_token: '1//04q0U2RmlWBJ9CgYIARAAGAQSNwF-L9IrIAG5EhqQNv21-LMxCKBVpwzPg9iHxfUj8AHmtGNZMlQpVRv7FTjHVZVzX5PJxFNIpUM' });

const sendEmail = async (to, subject, text) => {

    const accessToken = await oAuth2client.getAccessToken();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp',
        port: 587,
        // secure: true,
        auth: {
            type: 'OAuth2',
            user: 'vikasmaurya@nimapinfotech.com',
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refresh_token: process.env.REFRESH_TOKEN,
            accessToken: accessToken.token
        },
    });


    const mailOptions = {
        from: 'vikasmaurya@nimapinfotech.com',
        to,
        subject,
        text,
    };
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
const nodeCron = () => {
    cron.schedule('*/2 * * * *', async () => {
        try {
            sendEmail('virendrapathak@nimapinfotech.com', 'Hello from Heaven', `let radius = [2, 4, 5, 7]

            function calculateArea(radius): any {
                return Math.PI * radius * radius
            }
            function calculate(calculateArea: Function) {
                let out = [];
                for (let i = 0; i < radius.length; i++) {
                    out.push(calculateArea(radius[i]));
                }
            }`)
            console.log('mail sent');
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    }, {
        scheduled: true,
        timezone: 'UTC'
    });
}

nodeCron()