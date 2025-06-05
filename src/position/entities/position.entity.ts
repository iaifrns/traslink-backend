import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Positions{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: true})
    position: string
    @Column({default: true})
    active: boolean
}