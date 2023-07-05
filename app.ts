// let str: string = 'Vikas';
// let data: number[] = [1, 4, 5, 7, 1];

import express, { Application, Request, Response, NextFunction } from 'express';
const app: Application = express();
import dotenv, { config } from 'dotenv'
dotenv.config()
import { client } from './models/user';
// db.sequelize.sync()
async function connection() {
    await client.connect().then(function () {
        console.log('connected to database');
    }).catch(function (error) {
        console.log(error.message);
    });
}
connection()
app.get('/', (req: Request, res: Response, next: NextFunction) => {

    res.send({ message: 'hello' });
})
app.listen(3000, '127.0.0.1', function () {
    console.log('Server is running.');
})