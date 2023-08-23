import { Entity, Column, OneToMany } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { Node } from './node'
import { Book } from './book'

@Entity()
@ObjectType()
export class Author extends Node {
    
    @Column()
    @Field()
    name!: string;

    @OneToMany(() => Book, book => book.author)
    books: Book[];
}