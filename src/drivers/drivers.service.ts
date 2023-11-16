import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './driver.entity';
import { CreateDriverDto } from './dto/createDriver.dto';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver)
    private driver: Repository<Driver>,
  ) {}

  async create(driver: CreateDriverDto) {
    await this.driver.save(driver);
  }

  async findAll() {
    return await this.driver.find();
  }

  findOne(driverName) {
    return this.driver.findOneBy({ cpf: driverName });
  }
}
