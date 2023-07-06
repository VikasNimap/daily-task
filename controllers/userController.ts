import { User } from "../models/users";
import { Request, Response } from "express";

export async function createUser(req: Request, res: Response) {
    const data = req.body;
    const response = await User.create(data);
    console.log(response);
    

    // const response = await User.create();
}