import { Injectable } from "@nestjs/common";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { type } from "os";

@ObjectType('Lesson')
export class LessonType{
    @Field(type => ID)
    id : string
    @Field()
    name : string
    @Field()
    startDate : string
    @Field()
    endDate : string

    // @Field(type => [StudentType])
    // student :string
}