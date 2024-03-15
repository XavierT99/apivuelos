import { IsNotEmpty, IsString } from "class-validator";

export class UserDTO{
    @IsNotEmpty({message: 'El texto es requerido' })
    @IsString()
    readonly name: string;

    @IsNotEmpty({message: 'El texto es requerido' })
    @IsString()
    readonly email: string;

    @IsNotEmpty({message: 'El texto es requerido' })
    @IsString()
    readonly password: string;

    @IsNotEmpty({message: 'El texto es requerido' })
    @IsString()
    readonly username: string;
}