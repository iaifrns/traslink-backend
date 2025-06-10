import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Enterprise } from './entities/enterprise.entity';
import { Repository } from 'typeorm';
import { CreateEnterprise } from './dto/createEnterprise';

@Injectable()
export class EnterprisesService {
  constructor(
    @InjectRepository(Enterprise) private enterpiseRepo: Repository<Enterprise>,
  ) {}

  findAll(): Promise<Enterprise[]> {
    return this.enterpiseRepo.find();
  }

  findOneByCode(code: number): Promise<Enterprise | null> {
    return this.enterpiseRepo.findOneBy({ enterpriseCode: code });
  }

  findOne(id: number): Promise<Enterprise | null> {
    return this.enterpiseRepo.findOneBy({ id });
  }

  create(input: string) {
    const currentDate = Date.now();
    const hash = currentDate / 1000000;
    const code = hash.toString().split('.')[1];

    console.log(code)
    const enterpise: CreateEnterprise = {
      enterpriseName: input,
      enterpriseCode: parseInt(code),
    };

    const newEnterprise = this.enterpiseRepo.create(enterpise);

    return this.enterpiseRepo.save(newEnterprise);
  }

  update(enterprise: Enterprise) {
    this.enterpiseRepo.save(enterprise);
  }
}
