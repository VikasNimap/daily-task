import db from '../models/index';
import { Request, Response } from 'express';


const createUser = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        console.log(data);

        const response = await db.users.create(data);
        console.log(response);
    } catch (error) {
        res.status(500).send({ error })
    }


}

export = { createUser }