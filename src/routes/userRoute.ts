import express from 'express';
import { UserCrud } from '../controller/userController';
const app = express.Router();
const user = new UserCrud();
app.post('/users', user.createUser);
app.get('/users', user.getUser);
app.put('/users/:id', user.updateUser);
app.delete('/users/:id', user.deleteUser);

export default app;