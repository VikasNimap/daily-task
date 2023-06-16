import { Request, Response } from "express-serve-static-core"
import { fileServices } from '../services/fileService';
const file = async (req: Request, res: Response) => {
    const response: any = await fileServices(req, res);
    if (response.error) {
        res.status(400).send(response);
    }
    console.log(response);
    res.send(response)

}

export { file }