import { User } from '../models/user.entity';
import { AppDataSource } from '../app';
import { Request, Response } from 'express';
import { genSalt, hash, compare } from 'bcrypt';
import { initialize, session } from 'passport';
export class UserCrud {
    async createUser(req: Request, res: Response) {
        const salt = await genSalt(10);
        req.body.password = await hash(req.body.password, 10);
        const user = AppDataSource.getRepository(User).create(req.body);
        let result = await AppDataSource.getRepository(User).save(user);
        res.status(201).send(result)
    }

    async getUser(req: Request, res: Response) {
        // const user = AppDataSource.getRepository(User).create(req.body);
        let result = await AppDataSource.getRepository(User).findAndCount();
        console.log(result);

        res.status(201).send(result)
    }

    async updateUser(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        // const user = await AppDataSource.getRepository(User).findOneBy({ id: Number(id) });
        // user!.firstName = req.body.firstName
        let result = await AppDataSource.getRepository(User).update(data, { id: Number(id) });
        res.status(200).send(result)
    }

    async deleteUser(req: Request, res: Response) {
        const { id } = req.params;
        let result = await AppDataSource.getRepository(User).delete({ id: Number(id) });
        res.status(200).send(result)
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;
        if (!(email && password)) {
            return res.status(400).send({ message: 'Please provide email and password' })
        }
        let userEmail: string = email;
        const response = await AppDataSource.getRepository(User).findOneBy({ email: userEmail });
        if (!response) {
            return res.status(400).send({ message: 'User not found.' });

        }
        if (response) {
            const comparePassword = await compare(password, response?.password)
            if (!comparePassword) {
                return res.status(400).send({ message: 'Password do not match.' });
            }



        }

    }

}