import { Sequelize } from 'sequelize-typescript';
import { User } from '../model/user';
class DataBase {
    public sequelize: Sequelize | undefined;

    private POSTGRES_DB = process.env.POSTGRES_DB as string;
    private POSTGRES_HOST = process.env.POSTGRES_HOST as string;
    private POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number;
    private POSTGRES_USER = process.env.POSTGRES_USER as string;
    private POSTGRES_PASSWORD = String(process.env.POSTGRES_PASSWORD) as string;


    constructor() {
        this.connectToDB();
    }

    private async connectToDB() {
        this.sequelize = new Sequelize({
            database: this.POSTGRES_DB,
            username: this.POSTGRES_USER,
            password: this.POSTGRES_PASSWORD,
            host: this.POSTGRES_HOST,
            port: this.POSTGRES_PORT,
            dialect: 'postgres',
            models: [User]
        })

        await this.sequelize
            .authenticate()
            .then(function () {
                console.log(`DB CONNECTED SUCCESSFULLY !!!!`);
            })
            .catch(function (error) {
                console.log(`Error occured while connecting DB ${error}`);

            })
    }


}

export default DataBase;