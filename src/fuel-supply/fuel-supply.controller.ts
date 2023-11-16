import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateFuelSupplyDto } from './dto/createFuelSupply.dto';
import { FuelSupplyService } from './fuel-supply.service';

@Controller('fuel-supply')
export class FuelSupplyController {
  constructor(private fuelSupplyService: FuelSupplyService) {}

  @Post()
  async create(@Body() createFuelSupplyDto: CreateFuelSupplyDto) {
    return this.fuelSupplyService.createFuelSupply(createFuelSupplyDto);
  }

  @Get(':driverCpf')
  async findByDriver(@Param('driverCpf') driverCpf: string) {
    return this.fuelSupplyService.findByDriver(driverCpf);
  }
}
