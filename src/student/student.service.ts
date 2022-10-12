import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateStudenInput } from './create-student.input';
import { Student } from './student.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) private studenRepository:Repository<Student>
    ){}

    async createStudent(createStudentInput:CreateStudenInput): Promise<Student>{
        const {firstName,lastName} = createStudentInput;

        const student = this.studenRepository.create({
            id : uuid(),
            firstName,
            lastName,

        });
        return this.studenRepository.save(student);
    }



    async getStudent(id: string) : Promise<Student>{
        return this.studenRepository.findOne({where:{id}})
    }


    
    async getStudents() : Promise<Student[]>{
        return this.studenRepository.find();
    }



   

    getManyStudents(studentIds : string[]): Promise<Student[]>{
        return this.studenRepository.find({
            where:{
                id:In([...studentIds]),
        }
        
    })
 }
}

