import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    fullname: string;
    @Column({unique: true})
    username: string;
    @Column()
    password: string;
    @Column({nullable: true})
    position: string;
}