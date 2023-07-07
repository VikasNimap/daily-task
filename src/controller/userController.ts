import { User } from '../models/user.entity';
import { AppDataSource } from '../app';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

export async function createUser(req: Request, res: Response) {
    // const salt: string = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hashSync(req.body.password, 10);
    const user = AppDataSource.getRepository(User).create(req.body);
    let result = await AppDataSource.getRepository(User).save(user);
    res.status(201).send(result)
}

export async function getUser(req: Request, res: Response) {
    // const user = AppDataSource.getRepository(User).create(req.body);
    let result = await AppDataSource.getRepository(User).findAndCount();
    res.status(201).send(result)
}

export async function updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    // const user = await AppDataSource.getRepository(User).findOneBy({ id: Number(id) });
    // user!.firstName = req.body.firstName
    let result = await AppDataSource.getRepository(User).update(data, { id: Number(id) });
    res.status(200).send(result)
}

export async function deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    let result = await AppDataSource.getRepository(User).delete({ id: Number(id) });
    res.status(200).send(result)
}

