import { Column, DataType, Model, Table } from "sequelize-typescript";



@Table({
    tableName: User.TABLE
})
export class User extends Model {
    public static TABLE = 'user' as string;
    public static TABLE_ID = 'id' as string;
    public static TABLE_NAME = 'name' as string;
    public static TABLE_EMAIL = 'email' as string;
    public static TABLE_PASSWORD = 'password' as string;

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: User.TABLE_ID
    })
    id!: number

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: User.TABLE_NAME
    })
    name!: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: User.TABLE_EMAIL
    })
    email!: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: User.TABLE_PASSWORD
    })
    password!: string
}