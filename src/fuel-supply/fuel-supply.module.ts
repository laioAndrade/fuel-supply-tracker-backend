import { Module } from '@nestjs/common';
import { FuelSupplyController } from './fuel-supply.controller';
import { FuelSupplyService } from './fuel-supply.service';
import { FuelSupply } from './fuel-supply.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FuelSupply])],
  exports: [TypeOrmModule],
  controllers: [FuelSupplyController],
  providers: [FuelSupplyService, FuelSupply],
})
export class FuelSupplyModule {}
