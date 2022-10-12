
import { Args, Resolver,Query, Mutation, ResolveField, Parent } from "@nestjs/graphql";
import { memoryUsage } from "process";
import { StudentService } from "src/student/student.service";
import { AssignStudentToLessonInput } from "./assign-students-to-lesson";
import { Lesson } from "./lesson.entity";
import { CreateLessonInput } from "./lesson.input";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";

@Resolver(of => LessonType)
export  class LessonResolver{
    constructor(
        private lessonService : LessonService,
        private studentService : StudentService,
    ){}

    @Query(returns => LessonType)
    lesson(
        @Args('id') id : string,
        ){
            return this.lessonService.getLesson(id)
        }

        @Query(returns => [LessonType])
        lessons(){
            return this.lessonService.getLessons();
        }

    @Mutation(returns => LessonType)
    createLesson(
        @Args('data') data: CreateLessonInput
    ){
        return this.lessonService.createLesson(data);
    }

    @Mutation(returns => LessonType)
    assignStudentsTolesson(
        @Args('assignStudentToLessonInput') assignStudentsToLessonInput: AssignStudentToLessonInput
    ){
        const {lessonId, studenIds} = assignStudentsToLessonInput;
        return this.lessonService.assignStudentsToLesson(lessonId, studenIds)
    }

    @ResolveField()
    async students(@Parent() Lesson:Lesson){
        return this.studentService.getManyStudents(Lesson.students)
    }
}