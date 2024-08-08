import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString({message: 'Email must be passed as string value.'})
    @IsEmail()
    email: string;

    @IsString({message: 'Name must be passed as string value.'})
    name: string;

    @IsString({message: 'Password must be passed as string value.'})
    @MinLength(8, {message: 'Password must have minimum 8 characters.'})
    password: string;
}
