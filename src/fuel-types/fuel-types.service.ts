import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FuelTypes } from './fuel-types.entity';

@Injectable()
export class FuelTypesService {
  constructor(
    @InjectRepository(FuelTypes)
    private fuelTypes: Repository<FuelTypes>,
  ) {}

  findAll() {
    return this.fuelTypes.find();
  }

  findOne(id) {
    return this.fuelTypes.findOneBy({ id });
  }
}
