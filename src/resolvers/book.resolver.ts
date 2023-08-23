import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Book } from '../models/book';
import { NewBookEntry } from '../inputs/book.input';

@Resolver()
export class BookResolver {

    @Query(() => [Book] )
    async searchBooks(): Promise<Book[]> {
        const books = await Book.find({
            relations: ['author']
        });
        return books;
    }

    @Mutation(() => Book)
     async addBook(@Arg("data") data: NewBookEntry): Promise<Book> {
        const newBook = Book.create({
            title: data.title,
            author: { id: data.authorId }
        });
        return newBook.save();
     }

}