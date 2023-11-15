import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFuelSupplyDto } from './dto/createFuelSupply.dto';
import { FuelSupply } from './fuel-supply.entity';

@Injectable()
export class FuelSupplyService {
  constructor(
    @InjectRepository(FuelSupply)
    private fuelSupplys: Repository<FuelSupply>,
  ) {}

  createFuelSupply(fuelSupply: CreateFuelSupplyDto) {
    this.fuelSupplys.save(fuelSupply);
  }

  findByDriver(driverId: number): string {
    return 'Olá';
  }
}
