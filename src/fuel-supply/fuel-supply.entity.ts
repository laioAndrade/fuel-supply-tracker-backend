import { FuelTypes } from 'src/fuel-types/fuel-types.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class FuelSupply {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  driver: string;

  @ManyToOne(() => FuelTypes, { eager: true })
  @JoinColumn({ name: 'fuelTypeId' })
  fuelType: FuelTypes;

  @Column('float')
  fuelSupplyPrice: number;

  @Column('float')
  fuelLevel: number;

  @CreateDateColumn()
  date: Date;
}
