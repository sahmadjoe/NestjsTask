import { Args, Mutation, Resolver } from "@nestjs/graphql";
import exp from "constants";
import { of } from "rxjs";
import { CreateStudenInput } from "./create-student.input";
import { Student } from "./student.entity";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";

@Resolver(of => StudentType)
export class StudentResolver{
    constructor(
        private studentService:StudentService
    ){}

    @Mutation(returns => StudentType)
    async createStudent(
        @Args('createStudentInput') CreateStudenInput : CreateStudenInput
    ){
        return this.studentService.createStudent(CreateStudenInput);
    }
    
}
