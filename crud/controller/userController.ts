import { Request, Response } from "express"
import User from "../models/users";
import bcrypt from 'bcrypt';
const createUser = async (req: Request, res: Response) => {
    const salt = await bcrypt.genSalt(10);
    const data = req.body;
    data.password = await bcrypt.hash(data.password, salt);
    const response: object = await User.create(data)
    if (!response) {
        res.status(400).json({ error: true })
    } else {
        res.status(201).json({ message: response })

    }
}

export { createUser }