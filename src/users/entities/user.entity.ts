import { Positions } from "src/position/entities/position.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
    @Column({default: true})
    active: true
    @ManyToOne(()=>Positions, (position)=>position.users, {eager: true})
    @JoinColumn({name: "positionId"})
    position: Positions
}