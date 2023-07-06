import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length:20
    })
    name!: string

    @Column()
    email!: string

    @Column()
    password!: string
}