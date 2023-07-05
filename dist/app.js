"use strict";
// let str: string = 'Vikas';
// let data: number[] = [1, 4, 5, 7, 1];
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const user_1 = require("./models/user");
// db.sequelize.sync()
function connection() {
    return __awaiter(this, void 0, void 0, function* () {
        yield user_1.client.connect().then(function () {
            console.log('connected to database');
        }).catch(function (error) {
            console.log(error.message);
        });
    });
}
connection();
app.use(express_1.default.json());
app.listen(3000, '127.0.0.1', function () {
    console.log('Server is running.');
});
