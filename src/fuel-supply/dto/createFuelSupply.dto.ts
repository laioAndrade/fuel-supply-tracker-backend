// import { IsNotEmpty } from 'class-validator';

export class CreateFuelSupplyDto {
  // @IsNotEmpty()
  driver: string;

  // @IsNotEmpty()
  fuelType: string;

  // @IsNotEmpty()
  fuelLevel: number;
}
