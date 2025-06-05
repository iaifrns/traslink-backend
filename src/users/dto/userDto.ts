import { Positions } from "src/position/entities/position.entity";

export class UserDto{
    id: number;
    fullName:string;
    username: string;
    enterpriseCode: number;
    position: Positions
}