/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty } from 'class-validator';
export class UsersDTO {
    id: number;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    username:string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    company : string;

    @IsNotEmpty()
    phone : string;

    @IsNotEmpty()
    city : string;

    @IsNotEmpty()
    password: string;
  }
