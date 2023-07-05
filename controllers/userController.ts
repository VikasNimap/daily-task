import { User } from "models/users";

export async function createUser(req: Request, res: Response) {
    const data = req.body;
    console.log(data);
    
    const response = await User.create();
}