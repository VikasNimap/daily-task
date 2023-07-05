import { User } from "models/users";
import { Request, Response } from "express";

export async function createUser(req: Request, res: Response) {
    const data = req.body;
    console.log(data);

    // const response = await User.create();
}