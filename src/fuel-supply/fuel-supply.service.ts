import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DriversService } from 'src/drivers/drivers.service';
import { FuelTypesService } from 'src/fuel-types/fuel-types.service';
import { Repository } from 'typeorm';
import { CreateFuelSupplyDto } from './dto/createFuelSupply.dto';
import { FuelSupply } from './fuel-supply.entity';

@Injectable()
export class FuelSupplyService {
  constructor(
    @InjectRepository(FuelSupply)
    private fuelSupplys: Repository<FuelSupply>,
    private driverService: DriversService,
    private fuelTypeService: FuelTypesService,
  ) {}

  async createFuelSupply(fuelSupply: CreateFuelSupplyDto) {
    const { driver, fuelTypeId, fuelLevel } = fuelSupply;
    const fuelType = await this.fuelTypeService.findOne(fuelTypeId);
    const driverExist = await this.driverService.findOne(driver);
    if (!driverExist) {
      this.driverService.create({ cpf: driver });
    }
    const fuelSupplyPrice = parseFloat((fuelType.price * fuelLevel).toFixed(2));
    const data = {
      fuelSupplyPrice,
      fuelType,
      ...fuelSupply,
    };
    return this.fuelSupplys.save(data);
  }

  async findByDriver(driverCpf: string) {
    const fuelSupplys = await this.fuelSupplys.findBy({ driver: driverCpf });

    return fuelSupplys;
  }
}
