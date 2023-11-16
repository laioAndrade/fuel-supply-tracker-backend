import { Module } from '@nestjs/common';
import { FuelSupplyController } from './fuel-supply.controller';
import { FuelSupplyService } from './fuel-supply.service';
import { FuelSupply } from './fuel-supply.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from 'src/drivers/driver.entity';
import { DriversModule } from 'src/drivers/drivers.module';
import { FuelTypesModule } from 'src/fuel-types/fuel-types.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FuelSupply, Driver]),
    DriversModule,
    FuelTypesModule,
  ],
  exports: [TypeOrmModule],
  controllers: [FuelSupplyController],
  providers: [FuelSupplyService],
})
export class FuelSupplyModule {}
