import { IsArray, IsBoolean, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateEvaluacionDto {
    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    asignatura:string;

    @IsString()
    @IsNotEmpty()
    docente:string;


    @IsBoolean()
    @IsOptional()
    estado:boolean;

}
