import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUser } from './dto/createUser';
import * as bcrypt from 'bcrypt';
import { EnterprisesService } from 'src/enterprises/enterprises.service';
import { PositionService } from 'src/position/position.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private userRepo: Repository<Users>,
    private enterpriseService: EnterprisesService,
    private positionService: PositionService,
  ) {}

  findOneByUsername(username: string) {
    return this.userRepo.findOneBy({ username });
  }

  async create(createUser: CreateUser) {
    const [position, enterprise] = await Promise.all([
      this.positionService.findOne(createUser.positionId),
      this.enterpriseService.findOneByCode(createUser.enterpriseCode),
    ]);

    if (!enterprise) throw 'No Enterprise with that code';

    if (!position) throw 'No position with this id';

    const hash = await bcrypt.hash(createUser.password, 10);
    const user = { ...createUser, password: hash };

    const newUser = this.userRepo.create({ ...user, position: position });
    const { password, ...result } = await this.userRepo.save(newUser);

    return result;
  }

  findAll() {
    return this.userRepo.find();
  }
}
