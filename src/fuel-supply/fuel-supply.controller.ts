import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateFuelSupplyDto } from './dto/createFuelSupply.dto';
import { FuelSupplyService } from './fuel-supply.service';

@Controller('fuel-supply')
export class FuelSupplyController {
  constructor(private fuelSupplyService: FuelSupplyService) {}

  @Post()
  async create(@Body() createFuelSupplyDto: CreateFuelSupplyDto) {
    this.fuelSupplyService.createFuelSupply(createFuelSupplyDto);
  }
}
