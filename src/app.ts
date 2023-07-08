import express, { Application, Request, Response, NextFunction, } from 'express';
import session from 'express-session';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import 'reflect-metadata';
import { User } from './models/user.entity';
dotenv.config();
import userRoute from './routes/userRoute';
import passport, { serializeUser, initialize } from 'passport';
import { Strategy } from 'passport-local';



console.log('connecting to db....');

// async function connection() {
export const AppDataSource: DataSource = new DataSource({
    type: 'postgres',
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: ['src/migrations/userMigration.ts'],
});
AppDataSource.initialize().then(function () {
    console.log('connected to db...');
}).catch(function (err) {
    console.log(err);
})
// }
// connection()
const app: Application = express();
app.use(express.json());
app.use(session({
    secret: process.env.PASSPORT_SECRET ? process.env.PASSPORT_SECRET : '1234567890qwertyuiop',
    resave: false,
    saveUninitialized: true,
}))
app.use(passport.initialize());
app.use(passport.session());
// let authUser
// const login = async (req: Request, res: Response) => {
//     authUser = async (email: string, password: string, done: any) => {
//         let user = new User();
//         await AppDataSource.getRepository(User).findOneBy({ email: email })
//         let authenticatedUser = { email: req.body.email, password: req.body.password }
//         return done(null, authenticatedUser)
//     }
// }
// passport.use(new Strategy(authUser))
app.use('/api', userRoute);
app.listen(Number(process.env.APP_PORT) || 3000, '127.0.0.1', function () {
    console.log('Server is listening $$$$$$', process.env.APP_PORT);
})