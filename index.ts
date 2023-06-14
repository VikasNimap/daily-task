import dotenv from 'dotenv'
dotenv.config()
import { Model, Optional } from 'sequelize'
const db = require('./models/index');
import sequelize from 'sequelize-typescript';
import express from 'express';
const app = express();
app.use(express.json());
db.sequelize.sync({ alter: true });
import userRoute from './routes/userRoute';

app.use('/api', userRoute);









app.listen(process.env.PORT, () => {
    console.log(`http://127.0.0.1:${process.env.PORT}`);

})