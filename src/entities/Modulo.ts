import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Docencia } from "./Docencia";



@Entity()
export class Modulo{
    @PrimaryGeneratedColumn()
    id: number=0;
    @Column()
    codigo:string = ''
    @Column()
    nombre:string = ''

    @OneToMany(()=>Docencia,(docencia=>docencia.modulo))
    docencias:Docencia[]
}