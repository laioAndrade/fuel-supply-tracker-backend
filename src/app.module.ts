import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuelSupplyController } from './fuel-supply/fuel-supply.controller';
import { FuelSupplyService } from './fuel-supply/fuel-supply.service';
import { FuelSupplyModule } from './fuel-supply/fuel-supply.module';
import { DataSource } from 'typeorm';
import { FuelSupply } from './fuel-supply/fuel-supply.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [FuelSupply],
      synchronize: true,
      autoLoadEntities: true,
    }),
    FuelSupplyModule,
  ],
  controllers: [AppController, FuelSupplyController],
  providers: [AppService, FuelSupplyService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
