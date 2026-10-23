import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"



@Entity()
export class ReservaAula{
    @PrimaryGeneratedColumn()
    id: number=0;
    @Column()
    fechaReserva:Date = new Date()
    @Column()
    horaInicio:string = ''
    @Column()
    horaFin:string = ''
}