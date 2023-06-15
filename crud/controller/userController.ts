import { Request, Response } from "express"
import { db } from '../models/index';
const createUser = async (req: Request, res: Response) => {
    const data: object = req.body;
    const response: object = await db.users.create(data);
    if (!response) {
        res.status(400).json({ error: true })
    } else {
        res.status(201).json({ message: response })

    }
}

export { createUser }