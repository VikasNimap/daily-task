"use strict";
// import { express, Request, Response } from 'express';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
