import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
import { v4 as uuid} from 'uuid';

@Injectable()
export class LessonService {
    assignStudentsToLesson: any;
    constructor(@InjectRepository(Lesson) private lessonRepository: Repository<Lesson>){}

    // untuk get LessonID

    async getLesson(id: string): Promise<Lesson>{
        return this.lessonRepository.findOne({where:{id: id}})
    }

    //getLesson
    async getLessons(): Promise<Lesson[]>{
        return this.lessonRepository.find();
    }

    async createLesson(createLessonInput : CreateLessonInput) : Promise<Lesson>{
        const {name,
            startDate,
            endDate,
            students
        } =  createLessonInput;

        const lesson = this.lessonRepository.create({
            id : uuid()
        })

        await this.lessonRepository.save(lesson);
        return lesson

    }


}

