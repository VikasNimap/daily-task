import  express from 'express';
const app = express();
app.listen(3000, '127.0.0.1', function () {
    console.log('listening');
})
import { Request, Response } from 'express';
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello' })
})

console.log(123);
