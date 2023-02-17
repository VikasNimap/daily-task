const LocalStrategy = require('passport-local').Strategy;
const { response } = require('./app');
const db = require('./models/index');
const users = db.users;

exports.initializingPassport = (passport) => {
    passport.use(new LocalStrategy(async (username, password, done) => {
        const response = await users.findOne({ where: { username } });
        try {
            if (!response) {
                return done(null, false);
            }
            if (response.password !== password) {
                return done(null, false);
            }
            else {
                return done(null, response);
            }
        } catch (error) {
            return done(error, false);
        }
    }))
    passport.serializeUser((users, done) => {
        done(null, users.id)
    })
    passport.deserializeUser(async (id, done) => {
        try {
            const result = await users.findOne(id);
            done(null, result);
        } catch (error) {
            done(error, false)
        }
    })
}