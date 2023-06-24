import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import {  UpdateEvaluacionDto } from './dto/update-evaluacion.dto';
import { Evaluacion } from './entities/evaluacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EvaluacionService {

  private readonly logger = new Logger('EvaluacionService');

  constructor(
    @InjectRepository(Evaluacion)
    private readonly evaluacionRepository: Repository<Evaluacion>,

    ){}


  async create(createEvaluacionDto: CreateEvaluacionDto) {
    try {
      const evaluacion =  this.evaluacionRepository.create(createEvaluacionDto);
      await this.evaluacionRepository.save(evaluacion);

      return evaluacion;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }

  }

  findAll() {
    // persistencia de los datos usando un array de objetos
    // con los datos de la entidad
    const dataJson = [
      {
        nombre: "persistencia",
        asignatura: "JSON",
        docente: "prueba",
        estado: true,
        id: "1"
      },
      {
        nombre: "persistencia 2",
        asignatura: "JSON 2",
        docente: "prueba 2",
        estado: false,
        id: "2"
      },
      {
        nombre: "persistencia 3",
        asignatura: "JSON 3",
        docente: "prueba 3",
        estado: false,
        id: "3"
      },
    ]

    // return this.evaluacionRepository.find({});
    return dataJson
  }

  async findOne(id: string) {
    const evaluacion= await  this.evaluacionRepository.findOneBy ({ id });
    if (!evaluacion)
      throw new NotFoundException(`evaluacion ${id} no encontrado`);
    return evaluacion;

  }

  async update(id: string, updateEvaluacionDto: UpdateEvaluacionDto) {
    const evaluacion = await this.evaluacionRepository.preload({
      id: id,
      ...updateEvaluacionDto
    });
    if (!evaluacion) throw new NotFoundException(`evaluacion ${id} no encontrado`)

    try {
      await  this.evaluacionRepository.save(evaluacion)
      return evaluacion;

    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const evaluacion = await this.findOne(id);
    await this.evaluacionRepository.remove(evaluacion);

  }
}
