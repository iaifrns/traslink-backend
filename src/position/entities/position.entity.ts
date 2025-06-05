import { Users } from "src/users/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Positions{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: true})
    position: string
    @Column({default: true})
    active: boolean
    @OneToMany(()=>Users, (user)=>user.position)
    users: Users[]
}