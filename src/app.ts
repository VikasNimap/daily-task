import express, { Application, Request, Response, NextFunction } from 'express';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import 'reflect-metadata';

import { User } from './models/user.entity';
dotenv.config();

// async function connection() {
export const AppDataSource = new DataSource({
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
    migrations: [],
});
AppDataSource.initialize().then(function () {
    console.log('connected to db...');
}).catch(function (err) {
    console.log(err);
})
// }
// connection()
const app: Application = express();
app.listen(Number(process.env.APP_PORT) || 3000, '127.0.0.1', function () {
    console.log('Server is listening $$$$$$', process.env.APP_PORT);
})