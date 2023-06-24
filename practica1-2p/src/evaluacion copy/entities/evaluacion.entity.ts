import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Evaluacion {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('varchar')
    nombre:string;

    @Column('varchar')
    asignatura:string;

    @Column('varchar')
    docente:string;

    @Column('boolean', {default:true})
    estado:boolean;
}

