// import { express, Request, Response } from 'express';

// const app = express();
// const port = 3000; // Choose any port you prefer

// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello, World!');
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// const express = require('express');
// const app = express();
// app.listen(3000, '127.0.0.1', () => {
//     console.log('listening');
// })

// import dotenv from 'dotenv';

// dotenv.config();
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});