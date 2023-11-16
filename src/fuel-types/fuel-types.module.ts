import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuelTypesController } from './fuel-types.controller';
import { FuelTypes } from './fuel-types.entity';
import { FuelTypesService } from './fuel-types.service';

@Module({
  imports: [TypeOrmModule.forFeature([FuelTypes])],
  exports: [TypeOrmModule, FuelTypesService],
  controllers: [FuelTypesController],
  providers: [FuelTypesService],
})
export class FuelTypesModule {}
