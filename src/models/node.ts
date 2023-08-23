import { BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Node extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field()
    id!: number; 
}