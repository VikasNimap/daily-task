import express from 'express';
import { createUser } from '../controller/userController';
const app = express.Router();

app.post('/users', createUser);

export default app;