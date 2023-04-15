const { body, validationResult } = require('express-validator');

exports.checkValid = [
    body("name").notEmpty().withMessage("name is required").isLength({ min: 3, max: 15 }).withMessage("name must be minimum 3-5 characters").trim(),
    body("email").notEmpty().withMessage("Email must be specified.").isLength({ min: 9, max: 50 }).trim()
        .isEmail().withMessage("Email must be a valid email address."),

    body("password").notEmpty().withMessage("password is required")
        .isLength({ min: 8, max: 15 }).withMessage("password must be minimum 8 characters").trim()
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.{8,})/).withMessage("password must include one small case one upper case and one special character.")
]

//login
exports.loginValidation = [
    body('email').notEmpty().withMessage('Email must be specified.').isLength({min: 9, max: 50}).trim()
    .isEmail().withMessage("Email must be a valid email address."),

    body("password").notEmpty().withMessage("password is required")
        .isLength({ min: 8, max: 15 }).withMessage("password must be minimum 8 characters").trim()
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.{8,})/).withMessage("password must include one small case one upper case and one special character.")
]

//verify email

exports.verifyEmail = [
    body('email').notEmpty().withMessage('Email must be specified.').isLength({min: 9, max: 50}).trim()
    .isEmail().withMessage("Email must be a valid email address.")
]

exports.otp = [
    body('otp').notEmpty().withMessage('otp is required').isLength({min:4,max:6}).trim()
]

//update password
exports.checkPasswd = [
    body("password").notEmpty().withMessage("password is required")
        .isLength({ min: 8, max: 15 }).withMessage("password must be minimum 8 characters").trim()
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.{8,})/).withMessage("password must include one small case one upper case and one special character."),
    
    body('confirmPassword').notEmpty().withMessage("password is required")
    .isLength({ min: 8, max: 15 }).withMessage("password must be minimum 8 characters").trim()
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.{8,})/).withMessage("password must include one small case one upper case and one special character.")
]