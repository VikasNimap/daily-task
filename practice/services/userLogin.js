const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendMail = require('../utils/mail');

const db = {
    user: {
        email: process.env.USER_EMAIL,
        password: '$2a$12$pJh5QK6KsPa2oT.ubdpalONZhMCE28NH7GSxDbcJC8fJQF5znzrtO',
        otp: ''
    }
}

exports.createLogin = async (email, password) => {
    if (!(email && password)) {
        return { error: true, data: null, message: 'please provide email & password.' }
    }
    const response = db.user.email;
    if (!(response === email)) {
        return { error: true, data: null, message: 'email not found.' };
    }
    let comparePassword = await bcrypt.compare(password, db.user.password);
    if (!comparePassword) {
        return { error: true, data: null, message: 'Password do not match.' }
    }
    const token = jwt.sign({ id: 1, email, roleId: 4 }, process.env.SECRET_KEY, { algorithm: 'HS256', expiresIn: '1h' });
    db.user['token'] = token;
    return { error: null, data: db.user, message: 'logged in successfully.' }
}

exports.forgotPassword = async (email) => {
    const response =  db.user.email;
    if (!(response && email)) {
        return { error: true, data: null, message: `email do not match or doesn't exists in our server .` };
    }
    if (!(response === email)) {
        return { error: true, data: null, message: 'email do not match.' }
    }
    db.user.otp += Math.floor(100000 + Math.random() * 900000);;
    let subject = `Otp for password reset.`;
    let html = `<h1>Please verify this otp to set-up your password
    Otp is ${db.user.otp}</h1>
    `;
    await sendMail.sendEmail(email, subject, html);
    return { error: null, data: subject, message: 'email sent successfully.' }

}


/*
<table>
    <tr>
      <th>Company</th><span></span>
      <th>Otp</th>
      <th>Info</th>
    </tr>
    <tr>
      <td>Hungama</td><span></span>
      <td>${db.user.otp}</td>
      <td>Kindly login with this otp to verify user.</td>
    </tr>
  </table>
*/