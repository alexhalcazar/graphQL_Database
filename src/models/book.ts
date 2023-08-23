import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Node } from './node';
import { Author } from './author'

@Entity()
@ObjectType()
export class Book extends Node {
    
    @Column()
    @Field()
    title!: string;

    @ManyToOne(() => Author, author => author.books)
    @Field(() => Author)
    author: Author;
}