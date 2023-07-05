// let str: string = 'Vikas';
// let data: number[] = [1, 4, 5, 7, 1];

import express, { Application, Request, Response, NextFunction } from 'express';
const app: Application = express();

function add(a: number, b: number): number {
    return a + b
}

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    let resp = add(5, 4)
    res.send({message:'hello'});
})

app.listen(3000, '127.0.0.1', function () {
    console.log('Server is running.');
})