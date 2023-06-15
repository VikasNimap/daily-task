import { Router } from 'express';
const route = Router();
import { createUser } from '../controller/userController';
route.post('/', createUser);

export default route;