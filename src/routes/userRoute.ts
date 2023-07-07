import express from 'express';
import { createUser, getUser, updateUser, deleteUser } from '../controller/userController';
const app = express.Router();

app.post('/users', createUser);
app.get('/users', getUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

export default app;