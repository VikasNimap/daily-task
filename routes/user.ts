import express from "express";
const router = express.Router();
import { createUser } from '../controllers/userController';
router.post('/users', createUser)
export default router