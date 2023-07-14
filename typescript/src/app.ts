import { log } from "console";
import express, { Application, Request, Response } from "express";
import DataBase from './config/database';
import dotenv from 'dotenv';
dotenv.config();

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.databaseSync();
        this.routes();
    }

    protected databaseSync(): void {
        const db = new DataBase();
        db.sequelize?.sync({ alter: true });
    }

    protected routes(): void {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send('welcome home');
        });
    }

}

const PORT: number = Number(process.env.PORT) || 3000;

const app = new App().app;
app.listen(PORT, '127.0.0.1', function () {
    console.log('Listening on', PORT);

})
