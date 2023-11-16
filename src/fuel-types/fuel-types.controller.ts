import { Controller, Get } from '@nestjs/common';
import { FuelTypesService } from './fuel-types.service';

@Controller('/fuel-types')
export class FuelTypesController {
  constructor(private fuelTypes: FuelTypesService) {}

  @Get()
  findAll() {
    return this.fuelTypes.findAll();
  }
}
