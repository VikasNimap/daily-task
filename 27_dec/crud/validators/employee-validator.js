const { body, validationResult } = require("express-validator");

exports.createEmployeeRules = () => {
    return [body("name", "enter name").notEmpty(),
    body("dept").notEmpty().isLength({ min: 5 }),
    body("email").notEmpty().isEmail(),
    body("password").notEmpty()
    ];
};


exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);

    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
    return res.status(422).json({
        errors: extractedErrors,
    });
};

// module.exports = {
//     createEmployeeRules,
//     validate,
// };

