import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length: 20
    })
    firstName!: string

    @Column()
    lastName!: string

    @Column()
    email!: string

    @Column()
    password!: string

    @Column()
    phone?: string
}