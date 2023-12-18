import { Field, ObjectType, ID } from 'type-graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Node } from './node';
import { Author } from './author'

@Entity()
@ObjectType()
export class Book extends Node {
    
    @Column()
    @Field()
    title!: string;

    @Column()
    @Field(() => ID) // Use ID type for authorId
    authorId!: number;

    @ManyToOne(() => Author, author => author.books)
    @Field(() => Author)
    author: Author;
}