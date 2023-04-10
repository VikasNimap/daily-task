

exports.createSession = async (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/dashboard');
    }
    next()
}

exports.nextSession = async (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/dashboard')
    }
    else {
        next()
    }
}