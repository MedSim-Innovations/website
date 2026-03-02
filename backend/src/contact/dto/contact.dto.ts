import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class ContactDto {
    @Transform(({ value }) => typeof value === 'string' ? value.trim().toLowerCase() : value)
    @IsEmail({}, { message: 'Invalid email address.' })
    @MaxLength(254, { message: 'Email must be 254 characters or fewer.' })
    email: string;

    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsString()
    @IsNotEmpty({ message: 'Name is required.' })
    @MaxLength(100, { message: 'Name must be 100 characters or fewer.' })
    name: string;

    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsOptional()
    @IsString()
    @MaxLength(20, { message: 'Phone must be 20 characters or fewer.' })
    phone?: string;

    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsString()
    @IsNotEmpty({ message: 'Subject is required.' })
    @MaxLength(200, { message: 'Subject must be 200 characters or fewer.' })
    subject: string;

    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsString()
    @IsNotEmpty({ message: 'Message is required.' })
    @MaxLength(5000, { message: 'Message must be 5000 characters or fewer.' })
    message: string;
}