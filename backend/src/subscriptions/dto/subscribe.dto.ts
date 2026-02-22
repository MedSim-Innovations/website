import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SubscribeDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}