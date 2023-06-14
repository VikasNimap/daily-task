import { Router } from 'express';
const router = Router();
import controller = require('../controller/userController');

router.post('/', controller.createUser);


export default router;