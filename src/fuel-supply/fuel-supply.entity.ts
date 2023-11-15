import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FuelSupply {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  driver: string;

  @Column()
  fuelType: string;

  @Column()
  fuelPrice: number;

  @Column()
  fuelLevel: number;
}
