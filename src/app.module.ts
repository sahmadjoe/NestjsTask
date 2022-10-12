import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entity } from 'typeorm';
import { Lesson } from './lesson/lesson.entity';
import { StudentService } from './student/student.service';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'mongodb',
      url : 'mongodb://localhost/school',
      synchronize : true,
      useUnifiedTopology : true,
      entities : [ Lesson,Student]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,      
      autoSchemaFile : true
    }),
    StudentModule
  ],
  providers: [StudentService],
})
export class AppModule {}
