import { PartialType } from '@nestjs/mapped-types';
import { CreateEvaluacionDto } from './create-evaluacion.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateEvaluacionDto extends PartialType(CreateEvaluacionDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
