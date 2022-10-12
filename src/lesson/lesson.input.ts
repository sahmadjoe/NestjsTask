import { Field, ID, InputType } from "@nestjs/graphql";
import { IsDateString, IsUUID, MinLength } from "class-validator";

@InputType()
export class CreateLessonInput{
    @MinLength(1)
    @Field()
    name : string;
    @Field()

    @IsDateString()
    startDate : string;

    @IsDateString()
    @Field()
    endDate : string;

    @IsUUID("4",{each: true})
    @Field(() => [ID], {defaultValue : []})
    students : string[]
}