// import { IsNotEmpty } from 'class-validator';

export class CreateFuelSupplyDto {
  // @IsNotEmpty()
  driver: string;

  // @IsNotEmpty()
  fuelTypeId: string;

  // @IsNotEmpty()
  fuelLevel: number;
}
