import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriversController } from './drivers.controller';
import { Driver } from './driver.entity';
import { DriversService } from './drivers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Driver])],
  exports: [TypeOrmModule, DriversService],
  controllers: [DriversController],
  providers: [DriversService],
})
export class DriversModule {}
