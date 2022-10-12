import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType('student')
export class StudentType{
    @Field()
    id : string;

    @Field()
    firstname: string;
    @Field()
    lastname : string
}