import { User } from '../models/user.entity';
import { AppDataSource } from '../app';
import { Request, Response } from 'express';
export async function createUser(req: Request, res: Response) {
    console.log(req.body);
    const user = AppDataSource.getRepository(User).create(req.body);
    // const user = new User();
    // user.firstName = req.body.firstName;
    // user.lastName = req.body.lastName;
    // user.email = req.body.email;
    // user.password = req.body.password;
    // const 
    let result = await AppDataSource.getRepository(User).save(user);
    res.status(201).send(result)
}