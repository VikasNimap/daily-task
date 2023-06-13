import user from '../model/userModel';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
interface User {
    name: string,
    email: string,
    password: string
}
const createUser = async (req: Request, res: Response) => {
    try {
        let { name, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt)
        let data: object = { name, email, password };
        const response = await user.create(data);
        if (!response) {
            return res.status(400).send({ error: response })
        }
        return res.status(201).send({ result: response })
    } catch (error) {
        res.status(500).send({ error: error })
    }

}


const getUser = async (req: Request, res: Response) => {
    try {
        const response: object = await user.find({ isActive: true });
        const count: number = await user.count({ isActive: true });
        if (!response) {
            return res.status(400).send({ error: response, message: 'no user found' })
        }
        return res.status(200).send({ result: response, count: count })
    } catch (error) {
        res.status(500).send({ error: error })
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const data: object = req.body;
        const response: object = await user.updateOne({ _id: id }, { data });
        if (!response) {
            return res.status(400).send({ error: response, message: 'no user updated' })
        }
        return res.status(200).send({ result: response })
    } catch (error) {
        res.status(500).send({ error: error })
    }
}














export { createUser, getUser, updateUser }
// module.exports = { createUser }