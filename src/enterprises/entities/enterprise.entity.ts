import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Enterprise{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    enterpriseName: string;
    @Column({unique:true})
    enterpriseCode: number;
    @Column({default: false})
    active: boolean
}