const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = {
    user: {
        email: 'vikas@gmail.com',
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
