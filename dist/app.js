"use strict";
// let str: string = 'Vikas';
// let data: number[] = [1, 4, 5, 7, 1];
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
function add(a, b) {
    return a + b;
}
app.get('/', (req, res, next) => {
    let resp = add(5, 4);
    res.send({ message: 'hello' });
});
app.listen(3000, '127.0.0.1', function () {
    console.log('Server is running.');
});
