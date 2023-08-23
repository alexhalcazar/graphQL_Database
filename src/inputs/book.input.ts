import { InputType, Field } from 'type-graphql';


@InputType()
export class NewBookEntry {
    @Field()
    title!: string;

    @Field()
    authorId: number;
}