import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    fullName: string;
    @Column({unique: true})
    username: string;
    @Column()
    password: string;
    @Column()
    enterpriseCode: number;
    @Column()
    positionId: string;
}