import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuelSupplyController } from './fuel-supply/fuel-supply.controller';
import { FuelSupplyService } from './fuel-supply/fuel-supply.service';
import { FuelSupplyModule } from './fuel-supply/fuel-supply.module';
import { DataSource } from 'typeorm';
import { FuelSupply } from './fuel-supply/fuel-supply.entity';
import { DriversModule } from './drivers/drivers.module';
import { DriversController } from './drivers/drivers.controller';
import { DriversService } from './drivers/drivers.service';
import { Driver } from './drivers/driver.entity';
import { FuelTypesController } from './fuel-types/fuel-types.controller';
import { FuelTypesService } from './fuel-types/fuel-types.service';
import { FuelTypesModule } from './fuel-types/fuel-types.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [FuelSupply, Driver],
      synchronize: true,
      autoLoadEntities: true,
    }),
    FuelSupplyModule,
    DriversModule,
    FuelTypesModule,
  ],
  controllers: [
    AppController,
    FuelSupplyController,
    DriversController,
    FuelTypesController,
  ],
  providers: [AppService, FuelSupplyService, DriversService, FuelTypesService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
